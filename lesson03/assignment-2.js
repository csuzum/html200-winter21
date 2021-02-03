// Set a string variable to be a sentence of at least five words and a period
let str = 'I want sake and amaiebi.';

// remove period and make array from sentence string
let arr = str.slice(0, 23).trim().split(" ");
  console.log(arr);

// console log the 3rd word
  console.log(arr[2]);
