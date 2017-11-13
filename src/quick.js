/**
 * Created by lenovo on 2017/11/10.
 * 快速排序
 */
/*
* 快速排序
* @param {Array} 待排序数组
* @return {Array} 排序成功数组
* */
function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // 标志元素，用于作比较的值
  let flagValue = arr.splice(0, 1);
  // 存储较小元素的数组
  let left = [];
  // 存储较大元素的数组
  let right = [];

  for (let i = 0; i < arr.length; i ++) {
    arr[i] < flagValue[0] ? left.push(arr[i]) : right.push(arr[i]);
  }
  // 递归调用
  return quick(left).concat(flagValue).concat(quick(right));
}


// var arr = [9, 1, 3, 7, 22, 5, 3, 6, 1];
// var newArr = quick(arr);
// console.log(newArr);

module.exports = quick;
