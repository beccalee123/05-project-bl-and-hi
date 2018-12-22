'use strict';

const fs = require('fs');
const Buffer = require('buffer/').Buffer;  
/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
  console.log('the file ', filePath);
}
let testBuf = new Bitmap('./assets/test.bmp');

let testFile = './assets/test.bmp';

//read a file in and returns a buffer
let readPromise = new Promise (function(resolve, reject){
  fs.readFile(testFile, (err, data) =>{
    if(err){ console.log('error'); }
    console.log('data length ', data);
    resolve(data);
  });
});

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */

Bitmap.prototype.parse = function(buffer) {

  this.fileHead = buffer.slice(0, 14);
  this.coreHead = buffer.slice(14, 50);

  this.red = buffer.slice(50, 54);
  this.green = buffer.slice(54, 58);
  this.blue = buffer.slice(58, 62);

  this.alpha = buffer.slice(62, 66);
  this.colorSpace = buffer.slice(66, 74);
  this.redG = buffer.slice(74, 110);
  this.greenG = buffer.slice(110, 114);
  this.blueG = buffer.slice(114, 118);

  this.endStuff = buffer.slice(118, 150);

  this.last = buffer.slice(150, buffer.length);

  return true;
  //... and so on
};


readPromise.then((data)=>{
  testBuf.parse(data);
  // console.log('testBuf ', testBuf); 

  // console.log(testBuf);
  testBuf.last.fill('0000FF');
  // console.log(testBuf.fill(0));


  let length = 0;
  let bufferArray = Object.values(testBuf).splice(1);

  bufferArray.forEach(buf=>{
    length += buf.length;
  });

  let clone = Buffer.concat( bufferArray, length);

  console.log('clone ', clone.length);

  return clone;

}).then((clone) => {
  fs.writeFile('./assets/cloned.bmp', clone, (err) => {
    if (err) {return console.error(err); }
    // console.log('tranformed' + clone);
    console.log('Image saved');
  });
});

