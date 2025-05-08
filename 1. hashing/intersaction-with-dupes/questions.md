prob ->

Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

You can return the result in any order.

testcases ->

intersectionWithDupes(
  ["a", "b", "c", "b"], 
  ["x", "y", "b", "b"]
); // -> ["b", "b"]

intersectionWithDupes(
  ["q", "b", "m", "s", "s", "s"], 
  ["s", "m", "s"]
); // -> ["m", "s", "s"]

intersectionWithDupes(
  ["p", "r", "r", "r"], 
  ["r"]
); // -> ["r"]

intersectionWithDupes(
  ["r"], 
  ["p", "r", "r", "r"]
); // -> ["r"]

intersectionWithDupes(
  ["t", "v", "u"], 
  ["g", "e", "d", "f"]
); // -> [ ]

intersectionWithDupes(
  ["a", "a", "a", "a", "a", "a",], 
  ["a", "a", "a", "a"]
); // -> ["a", "a", "a", "a"]

const a = [];
const b = [];
for (let i = 0; i < 20000; i += 1) {
  a.push(String(i));
  b.push(String(i));
}

intersectionWithDupes(a, b); // -> [0, 1, 2, ..., 19999]
