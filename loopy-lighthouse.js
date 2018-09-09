function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];
  var multiple1 = multiples[0];
  var multiple2 = multiples[1];
  var word1 = words[0];
  var word2 = words[1];


  for (var i = start; i <= end; i++) {
    if (i % multiple1 === 0 && i % multiple2 === 0) {
      console.log(word1 + word2);
    } else if (i % multiple1 === 0) {
      console.log(word1);
    } else if (i % multiple2 === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);