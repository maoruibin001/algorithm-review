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

function binary(arr, value) {
  if (arr.length <= 1) {
    return arr[0] === value ? 0 : -1;
  }

  let start = 0;
  let end = arr.length - 1;

  let middle;

  // 此处必须加此限制条件，确保查找的数在待查找对象中，否则会出现死循环
  while(start < end && arr[start] <= value && arr[end] >= value) {
    middle = start + Math.round(((value - arr[start]) / (arr[end] - arr[start])) * (end - start));
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}


// var arr = [1, 2, 3.3, 3.46, 4,  6, 7,9];
//
// console.log(binary(arr,8));

module.exports = binary;