/**
 * Created by lenovo on 2017/11/10.
 */
/*
* 数组元素位置互换
* @param {Array} arr 待交换数组
* @param {Number} i  待交换位置i
* @param {Number} j  待交换位置j
* @return {Array} 交换之后的数组。
*
* */
function swap(arr, i, j) {
  let resultArr = [...arr];
  let temp = resultArr[i];
  resultArr[i] = resultArr[j];
  resultArr[j] = temp;
  return resultArr;
}

module.exports = swap;