function quicksort(a) {
  if(Object.prototype.toString.call(a) !== '[object Array]') {
    throw new TypeError("传入的参数不是数组");
  }
  if(a.length === 0) {
    return;
  }
  function sort(a, begin, end) {
    if(begin === end) {
      return;
    }
    let beginIndex = begin, endIndex = end, temp;
    while(true) {
      while(a[endIndex] > a[begin] && endIndex > beginIndex) endIndex--;
      while(a[beginIndex] <= a[begin] && beginIndex < endIndex) beginIndex++;
      if(endIndex === beginIndex) {
        break;
      } else {
        temp = a[beginIndex];
        a[beginIndex] = a[endIndex];
        a[endIndex] = temp;
      }
    }
    if(endIndex === begin) {
      sort(a, begin + 1, end);
    } else {
      temp = a[begin];
      a[begin] = a[endIndex];
      a[endIndex] = temp;
      sort(a, begin, endIndex - 1);
      if(endIndex !== end) {
        sort(a, endIndex + 1, end);
      }
    }
  }
  sort(a, 0, a.length - 1);
}