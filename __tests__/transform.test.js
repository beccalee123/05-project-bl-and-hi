'use strict';

const yTransformer = require('../lib/ytransform.js');  
const xTransformer = require('../lib/xtransform.js');
const barsTransformer = require('../lib/barstransform.js');
const colorTransformer = require('../lib/colortransform.js');
const diagonal = require('../lib/diagonal.js');


describe('y transform', () => {
  let testMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  it('flips the matrix so the last array becomes the first array', () => {
    let result = yTransformer.flipY(testMatrix);
    expect(result).toEqual([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
  });
});

describe('x transform', () => {
  let testMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  it('reverses the numbers within the row arrays inside the matrix', () => {
    let result = xTransformer.flipX(testMatrix);
    expect(result).toEqual([[3, 2, 1], [6, 5, 4], [9, 8, 7]]);
  });
});

describe('Yellow transform', () => {
  it('mutates the buffer to have 0 for red, 0 for s, 2 for green and three for red', () => {
    let testBuff = {
      colorArray: Buffer.from([1, 2, 3, 4]),
    };

    let transBuffer = colorTransformer.yellowTransform(testBuff);
    console.log(testBuff.colorArray, transBuffer.colorArray);
    expect(transBuffer.colorArray).toEqual(Buffer.from([0, 2, 3, 0]));
  });
});

describe('Green transform', () => {
  it('mutates the buffer to have 0 for red and blue, and 2 for green in rgb', () => {
    let testBuff = {
      colorArray: Buffer.from([1, 2, 3, 4]),
    };

    let transBuffer = colorTransformer.greenTransform(testBuff);
    console.log(testBuff.colorArray, transBuffer.colorArray);
    expect(transBuffer.colorArray).toEqual(Buffer.from([0, 2, 0, 4]));
  });
});





