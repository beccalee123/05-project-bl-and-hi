'use strict';

let colorTransform = module.exports = {};


colorTransform.yellowTransform = (buffer) => {
  for (let i = 0; i < buffer.colorArray.length; i += 4) {
    buffer.colorArray[i] = 0;
    buffer.colorArray[i + 1] = buffer.colorArray[i + 1];
    // buffer.colorArray[i + 2] = 0;
    buffer.colorArray[i + 3] = 0;
  }
};

colorTransform.greenTransform = (buffer) => {
  for (let i = 0; i < buffer.colorArray.length; i += 4) {
    buffer.colorArray[i] = 0;
    buffer.colorArray[i + 1] = buffer.colorArray[i + 1];
    buffer.colorArray[i + 2] = 0;
    // buffer.colorArray[i + 3] = 0;
  }
};
