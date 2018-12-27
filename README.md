![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Buffers - Bitmap Transformer

### Author: Becca Lee and Hannah Ingham

### Links and Resources
![Build Status](https://api.travis-ci.com/beccalee123/05-project-bl-and-hi.svg?branch=master)

* [repo](https://github.com/beccalee123/05-project-bl-and-hi)
* [travis](](https://www.travis-ci.com/beccalee123/05-project))


###### Usage Notes or examples
From terminal run node. Enter in two arugments into the command line: a bitmap image and a transformation you would like to see. 
Format: node index.js ../pathtofile/name.bmp transformation

`node index.js ../assets/baldy.bmp skew

### Modules
#### `modulename.js`
##### We made modues for 6 different transformation functions:
* barstransform.js (enter: 'behind-bars')
* colortransform.js (enter: 'yellow' or 'green')
* diagonal.js   (enter: 'skew')
* xtransform.js (enter: 'flip-left-rigth)
* ytransform.js (enter: 'upside-down')


### Setup
#### `.env` requirements
* install node
* npm istall util, fs, Buffer
* require in node dependencies
* `PORT` - declare port in environment

#### Running the app
Backend app that runs via the command line in the terminal. See usage notes for run details.

#### Tests
* How do you run tests? We use jest and eslint
* What assertions were made? 
* * accurately mutating matrix
* * accurately mutating color array buffer 
* What assertions need to be / should be made?
* * tests for diagonal.js module, and barstransform.js module

