
// find item position from arr, if not find it return -1;
function indexOf(arr, item) {
  if (Array.prototype.indexOf){
      return arr.indexOf(item);
  } else {
      for (var i = 0; i < arr.length; i++){
          if (arr[i] === item){
              return i;
          }
      }
  }     
  return -1;
}
// 链接：https://www.nowcoder.com/questionTerminal/e7835a8113dd48afb15f77ef8d1dcb1d