'use strict';

const yTransformer = require('../lib/ytransform.js');  
const xTransformer = require('../lib/xtransform.js');
const barsTransformer = require('../lib/barstransform.js');
const colorTransformer = require('../lib/colortransform.js');
const diagonal = require('../lib/diagonal.js');

let testMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

describe('y transform', () => {
  it('flips the matrix so the last array becomes the first array', () => {
    let result = yTransformer.flipY(testMatrix);
    expect(result).toEqual([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
  });
});

describe('x transform', () => {
  it('reverses the entire matrix and the arrays within it', () => {
    let result = xTransformer.flipX(testMatrix);
    expect(result).toEqual([[9, 8, 7], [6, 5, 4], [3, 2, 1]]);
  });
});

// describe('bar transform', () => {
//   it('does something', () => {
//     expect().toEqual();
//   });
// });

// describe('Yellow transform', () => {
//   it('does something', () => {
//     expect().toEqual();
//   });
// });

// describe('Green transform', () => {
//   it('does something', () => {
//     expect().toEqual();
//   });
// });

// describe('Diagonal transform', () => {
//   it('does something', () => {
//     expect().toEqual();
//   });
// });




