/**
 * Created by lenovo on 2017/11/10.
 */

var arr = [1, 3, 4, 5, 6];

function insertnumber(num) {
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] > num) {
      var temp = arr[arr.length - 1],
          flag = i;

      for (var j = i; j < arr.length; j ++) {

        arr[j] = arr[j + 1];
        flag = j;
        console.log(flag);
      }
      arr[flag] = temp;
    } else {
      arr[arr.length] = num;
    }
  }
  return arr;
}

console.log(insertnumber(2))