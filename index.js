'use strict';

const fs = require('fs');
const Buffer = require('buffer/').Buffer;
const yTransformer = require('./lib/ytransform.js');  
const xTransformer = require('./lib/xtransform.js');
const barsTransformer = require('./lib/barstransform.js');
const colorTransformer = require('./lib/colortransform.js');

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
  console.log('the file ', filePath);
}
let testBuf = new Bitmap('./assets/baldy.bmp');

let testFile = './assets/baldy.bmp';

//read a file in and returns a buffer
let readPromise = new Promise (function(resolve, reject){
  fs.readFile(testFile, (err, data) =>{
    if(err){ console.log('error'); }
    resolve(data);
  });
});

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */

Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  this.start = buffer.slice(0, 54); 
  this.fileHead = buffer.toString('ascii', 0, 14);
  this.offSet = buffer.readInt32LE(10);


  this.height = buffer.readInt32LE(22);//125
  this.width = buffer.readInt32LE(18);//110

  this.bitsPerPixel= buffer.readInt16LE(28);
  this.colorArray = buffer.slice(54, 1146);
  this.pixelArray = buffer.slice(1146, buffer.length);

  return true;
};


readPromise.then((data)=>{
  testBuf.parse(data);
  // let length = 0;
  // let bufferArray = Object.values(testBuf).splice(1);

  let rgbArray = [];
  let pixelString = testBuf.pixelArray.toString('hex');

  //transforming hex values to rgb values
  for(let i = 0; i< pixelString.length; i+=2){
    let hex = pixelString.charAt(i)+ pixelString.charAt(i+1);
    rgbArray.push( parseInt( hex ,16) );
  }

  let rowArray = [];

  for(let i = 0; i < rgbArray.length; i+=112){
    let oneRowArr = rgbArray.slice(i, i+112);
    rowArray.push(oneRowArr);
  }

  // yTransformer.flipY(rowArray);

  // xTransformer.flipX(rowArray);

  // barsTransformer.color(rowArray);

  // colorTransformer.yellowTransform(testBuf);
  
  colorTransformer.blueTransform(testBuf);

  // console.log('hexarr', hexArr);

  //making the color table one array
  let newRowArray = [];
  for(let i = 0; i< rowArray.length; i++){
    newRowArray= newRowArray.concat(rowArray[i]);
  }

  //making rgb values into hex values
  newRowArray = newRowArray.map(rgb=>{
    rgb = rgb.toString(16);
    (rgb).toString(16);
    if (rgb.length % 2) {
      rgb = '0' + rgb;
    }
    return rgb;
  });

  // Converting matrix to buffer
  let hexString = newRowArray.join('');

  let transPixelArray = Buffer.alloc(14000);

  testBuf.pixelArray = transPixelArray.fill( hexString, 'hex');

  // concatenating buffer pieces
  let cloned = Buffer.concat([testBuf.start, testBuf.colorArray, testBuf.pixelArray], 15146);

  return cloned;

}).then((clone) => {
  fs.writeFile('./assets/clone.bmp', clone, (err) => {
    if (err) {return console.error(err); }
    console.log('Image saved');
  });
});
