/**
 * Created by lenovo on 2017/11/13.
 * 堆排序
 */
const swap = require('./swap');
/**
 * 堆排序
 * @param {Array} arr 待排序数组
 *
 * @return {Array} 排序成功数组
 */
function heap(arr) {
  if (arr.length < 2) return arr;
  let len = arr.length;
  // 建堆
  for (let i = parseInt(len - 1) /2; i >= 0; i--) {
    arr = heapify(arr, len, i);
  }

  for (let i = len - 1; i >= 0; i --) {
    arr = swap(arr, i, 0);
    arr = heapify(arr, --len, 0);
  }

  return arr;
}

/**
 * 堆性质维护函数
 * @param {Array} heapArr 待维护数组
 * @param {Number} len 待维护的长度
 * @param {Number} i  维护的顶点
 *
 * @return {Array} 维护完成的数组
 */

function heapify(heapArr, len, i) {
  let arr = [...heapArr];
  let leftChild = i * 2 + 1;
  let rightChild = i * 2 + 2;
  let max = i;
  if (leftChild < len && arr[leftChild] > arr[max]) {
    max = leftChild;
  }

  if (rightChild < len && arr[rightChild] > arr[max]) {
    max = rightChild;
  }

  if (max !== i) {
    arr = swap(arr, max, i);
    return heapify(arr, len, max);
  }

  return arr;
}


// var arr = [9, 1, 3, 7, 22, 5, 3, 6, 1];
// var newArr = heap(arr);
// console.log(newArr);
module.exports = heap;