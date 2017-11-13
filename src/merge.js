/**
 * Created by lenovo on 2017/11/11.
 * 归并排序
 */


/**
 * 归并排序
 * @param {Array} arr 待排序数组
 *
 * @return {Array} 排序成功数组
 */
function merge(arr) {
  if (arr.length < 2) return arr;

  // 待排序数组中间元素
  let middle = parseInt(arr.length / 2);
  // 左数组
  let left = arr.slice(0, middle);
  // 由数组
  let right = arr.slice(middle);

  return mergeify(merge(left), merge(right));
}

/**
 * 归并比较
 * @param {Array} left 待比较的左数组
 * @param {Array} right 待比较的右数组
 *
 * @return {Array} 比较成功数组
 */
function mergeify(left, right) {
  let ret = [];

  while (left.length > 0 && right.length > 0) {
    left[0] < right[0] ? ret.push(left.shift()) : ret.push(right.shift());
  }

  while(left.length > 0) {
    ret.push(left.shift());
  }

  while (right.length > 0) {
    ret.push(right.shift());
  }

  return ret;
}


// var arr = [9, 1, 3, 7, 22, 5, 3, 6, 1];
// var newArr = merge(arr);
// console.log(newArr);

module.exports = merge;