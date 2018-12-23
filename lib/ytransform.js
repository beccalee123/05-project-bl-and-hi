'use strict'; 

let ytransform = module.exports = {};

//Calling transform function, flip y

ytransform.flipY = (arr) => {
  let counter = 0;
  for (let i = arr.length - 1; i >= Math.floor(arr.length / 2); i--) {
    let temp = arr[i];
    arr[i] = arr[counter];
    arr[counter] = temp;
    counter++;
  }
  return arr;
};