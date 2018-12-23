'use strict';

let barsTransform = module.exports = {};


barsTransform.color = (arr) => {
  for(let i = 0; i < arr.length; i++){
    for(let m = 0; m < arr[i].length; m+=8){
      arr[i][m] = 0;
      arr[i][m+1] = 0;
      // arr[i][m+2] = 10;
    }
  }
  return arr;
};
