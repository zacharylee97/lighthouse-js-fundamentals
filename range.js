function range (start, end, step) {
  var result = [];
  if (start === undefined || end === undefined || step === undefined) {
    return result;
  } else if (start > end) {
    return result;
  }
  else if (step < 0) {
    return result;
  }
  else {
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
