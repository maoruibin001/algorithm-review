/**
 * Created by lenovo on 2017/11/13.
 * 二分查找法
 */

/**
 * 二分查找法
 * @param {Array} arr 待查找数组
 * @param {Number} value 待查找元素
 *
 * @return {Number} 如果找到则返回元素下标，否则返回-1
 */

function binaryFor(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1; //如果查找不到，则返回-1
  for (let i = start; i <= end; i ++) {
    let middle = start + parseInt((end - start) / 2);
    if (arr[middle] === value) {
      index = middle;
      break;
    } else if (arr[middle] > value) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return index;
}


var arr = [1, 2, 3.3, 3.46, 4,  6, 7,9];

console.log(binaryFor(arr,3.4));

module.exports = binaryFor;