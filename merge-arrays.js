function merge(array1, array2) {
  var result = [];
  var Counter1 = 0;
  var Counter2 = 0;
  if (array1.length === 0) {
    result = array2;
  } else if (array2.length === 0) {
    result = array1;
  } else {
    while (Counter1 < array1.length) {
      while (Counter2 < array2.length) {
        if (array1[Counter1] < array2[Counter2]) {
          result.push(array1[Counter1]);
          Counter1++;
        } else {
          result.push(array2[Counter2]);
          Counter2++;
        }
      }
      if (Counter1 < array1.length) {
        result.push(array1[Counter1]);
        Counter1++;
      }
    }
  }
  return result;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

