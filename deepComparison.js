/*

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

*/

var deepEqual = function(a, b) {
  var prop;
  var propsInA;
  var propsInB;

  if (a === b) {
    return true
  }

  if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
    return false;
  }

  for (prop in a) {
    propsInA += 1;
  }

  for (prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }

  return propsInA === propsInB;
}

var obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}));