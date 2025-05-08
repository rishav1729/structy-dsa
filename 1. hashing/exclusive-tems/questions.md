Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in either array but not both arrays.

You may assume that each input array does not contain duplicate elements.

test cases::
exclusiveItems([4,2,1,6], [3,6,9,2,10]); // -> [4,1,3,9,10]
exclusiveItems([2,4,6], [4,2]); // -> [6]
exclusiveItems([4,2,1], [1,2,4,6]); // -> [6]
exclusiveItems([0,1,2], [10,11]); // -> [0,1,2,10,11]
const a = [];
const b = [];
for (let i = 0; i < 60000; i += 1) {
  a.push(i);
  b.push(i);
}
exclusiveItems(a, b); // -> [ ]