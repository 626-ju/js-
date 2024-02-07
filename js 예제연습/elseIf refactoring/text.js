"use strict";

/*
let a = parseInt(prompt("hi"));

if (a === 0) {
  console.log("a");
} else if (a === 1) {
  console.log("b");
} else if (a === 2) {
  console.log("c");
} else if (a === 3) {
  console.log("d");
} else if (a === 4) {
  console.log("e");
}

*/

// =>
// =>
// =>
// =>

/*
let a = parseInt(prompt("hi"));

switch (a) {
  case 0:
    console.log("a");
    break;

  case 1:
    console.log("b");
    break;

  case 2:
    console.log("c");
    break;
  case 3:
    console.log("d");
    break;

  case 4:
    console.log("e");
    break;
}
*/

// =>
// =>
// =>
// =>

let a = parseInt(prompt("hi"));

const A = {
  0: "a",
  1: "b",
  2: 'c',
  3: 'd',
  4: 'e'
};

console.log(A[`${a}`]);