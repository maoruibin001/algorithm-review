/**
 * Created by lenovo on 2017/11/12.
 * 计数排序
 */

/**
 * 计数排序
 * @parma {Array} arr 待排序数组
 *
 * @return {Array} 排序成功数组
 */
function count(arr) {
  if (arr.length < 2) return arr;

  // 存储元素个数的中间数组
  let tempList = [];

  let min = arr[0];
  let max = arr[0];
  let ret = [];
  for (let i = 0; i < arr.length; i ++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
    tempList[arr[i]] = tempList[arr[i]] ? tempList[arr[i]] + 1 : 1;
  }
// 填充中间数组，计算出每个元素之前有多少个元素
  for (let j = min; j <= max; j ++) {
    tempList[j + 1] = tempList[j] + (tempList[j + 1] || 0);
  }
// 由于数组arr第k个元素前面有tempList[arr[k]]个元素，所以在新数组中第tempList[arr[k]]个位置填入arr[k]
  for (let k = 0; k < arr.length; k ++) {
    ret[tempList[arr[k]] - 1] = arr[k];
    tempList[arr[k]] --;
  }

  return ret;
}


// var arr = [9, 1, 3, 7, 22, 5, 3, 6, 1];
// var newArr = count(arr);
// console.log(newArr);

module.exports = count;