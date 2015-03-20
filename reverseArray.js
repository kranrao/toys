/*

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

*/

var reverseArray = function(arr) {
  var reversedArr = [];
  var i;

  for (i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

console.log(reverseArray(['A', 'B', 'C']));

var reverseArrayInPlace = function(arr) {
  var old;
  var i;

  for (i = 0; i < Math.floor(arr.length / 2); i++) { // only loops through first half of the array to swap with back half
    old = arr[i]; // temp hold items in first half of array
    arr[i] = arr[arr.length - 1 - i]; // switch first half item with back half item 
    arr[arr.length - 1 - i] = old; // switch back half item with first half item
  }
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);