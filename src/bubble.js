/**
 * Created by lenovo on 2017/11/10.
 */
const swap = require('./swap');

function bubble(arr) {
  for (let i = 0, len = arr.length; i < len; i ++) {
    for (let j = 0; j < len - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

module.exports = bubble;