/**
 * Created by lenovo on 2017/11/10.
 */
const swap = require('./swap');

function select(arr) {
  for (let i = 0; i < arr.length - 1; i ++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j ++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      arr = swap(arr, min, i);
    }
  }

  return arr;
}

// var arr = [9, 1, 3, 7, 22, 5, 3, 6, 1];
// var newArr = select(arr);
// console.log(newArr)

module.exports = select;