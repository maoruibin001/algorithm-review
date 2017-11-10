/**
 * Created by lenovo on 2017/11/10.
 */
function insert(arr) {
  for (let i = 0; i < arr.length - 1; i ++) {
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i + 1],
          flag = i + 1;
      for (let j = i; j >= 0; j --) {
        if (arr[j] > temp) {
          arr[j + 1] = arr[j];
          flag = j;
        }
      }
      arr[flag] = temp;
    }
  }

  return arr;
}

module.exports = insert;

// var arr = [9, 1, 3, 7, 22, 5, 3, 6, 1];
// var newArr = insert(arr);
// console.log(newArr)