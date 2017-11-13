/**
 * Created by lenovo on 2017/11/10.
 */
function shell(arr) {

  let gap = 1,
      times = 2;
  let len = arr.length;
  while (parseInt(len / times) > gap ) {
    gap = gap * times + 1;
  }
  for (gap; gap >= 1; gap = parseInt(gap / times)) {
    for (let i = gap; i < len; i ++) {
      let temp = arr[i],
          flag = i;
      for (let j = i - gap; j >= 0; j -= gap) {
        if (arr[j] > temp) {
          arr[j + gap] = arr[j];
          flag = j;
        }
      }
      arr[flag] = temp;
    }
  }

  return arr;
}

// var arr = [9, 1, 3, 7, 22, 5, 3, 6, 1];
// var newArr = shell(arr);
// console.log(newArr)

module.exports = shell;