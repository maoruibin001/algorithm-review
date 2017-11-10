/**
 * Created by lenovo on 2017/11/10.
 */
/**
 * Created by lenovo on 2017/11/10.
 */
const swap = require('./swap');

function bubble(arr) {
  let len = arr.length,
    flag = len - 1;
  for (let i = 1, mark = 0; i < len; i++) {
    for (let j = 0; j < flag; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1);
        mark = j;
      }
    }
    flag = mark;
  }

  return arr;
}
module.exports = bubble;