function quicksort(a) {
  if(Object.prototype.toString.call(a) !== '[object Array]') {
    throw new TypeError("传入的参数不是数组");
  }
  if(a.length === 0) {
    return;
  }
  function sort(a, start, end) {
    if(start === end) {
      return;
    }
    let startIndex = start, endIndex = end, temp;
    while(true) {
      while(a[endIndex] > a[start] && endIndex > startIndex) endIndex--;
      while(a[startIndex] <= a[start] && startIndex < endIndex) startIndex++;
      if(endIndex === startIndex) {
        break;
      } else {
        temp = a[startIndex];
        a[startIndex] = a[endIndex];
        a[endIndex] = temp;
      }
    }
    if(endIndex === start) {
      sort(a, start + 1, end);
    } else {
      temp = a[start];
      a[start] = a[endIndex];
      a[endIndex] = temp;
      sort(a, start, endIndex - 1);
      if(endIndex !== end) {
        sort(a, endIndex + 1, end);
      }
    }
  }
  sort(a, 0, a.length - 1);
}