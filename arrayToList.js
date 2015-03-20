/*

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

*/

var arrayToList = function(arr) {
  var list = null;
  var i;

  for (i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }

  return list;
};

console.log(arrayToList([10, 20]));

var prepend = function(element, list) {
  return {value: element, rest: list};
};

console.log(prepend(10, prepend(20, null)));

var listToArray = function(list) {
  var arr = [];
  var node;

  for (node = list; node; node = node.rest) { // loop runs until node is falsey; which happend when node.est === null
    arr.push(node.value);
  }

  return arr;
}

console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));

var nth = function(list, n) {
  if (!list) {
    return;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
};

console.log(nth(arrayToList([10, 20, 30]), 1));