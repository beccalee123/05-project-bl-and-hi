'use strict'; 

let xtransform = module.exports = {};

//Calling transform function, flip y

xtransform.flipX = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let counter = 0;
    for(let m = arr[i].length - 1; m >= Math.floor(arr[i].length/2); m--){
      let temp = arr[i][m];
      arr[i][m] = arr[i][counter];
      arr[i][counter] = temp;
      counter ++;
    }
  }
  return arr;
};
