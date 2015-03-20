/*

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

*/

var countBs = function(str) {
  var counter = 0;
  var i;

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
      counter++;
    }
  }

  return counter;
}

console.log(countBs('BBC'));

var countChar = function(str, char) {
  var counter = 0;
  var i;

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++
    }
  }

  return counter;
}

console.log(countChar('kakkerlak', 'k'));