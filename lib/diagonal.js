'use strict'; 

let diagonal = module.exports = {};

//Calling transform function, flip y

diagonal.matrixShift = (matrix) => {
  for(let i = 0; i < matrix.length; i++){
    for(let m=0; m < matrix[i].length; m+=4){

      if(!matrix[i][m+i]){         
        matrix[i][m]='0';
        matrix[i][m+1]='0';
        matrix[i][m+2]= '0';
        matrix[i][m+3]='0';
      }
      else{
        matrix[i][m]=matrix[i][m + i];
        matrix[i][m+1]=matrix[i][m + i];
        matrix[i][m+2]= matrix[i][m + i];
        matrix[i][m+3]=matrix[i][m + i];
      }
      
    }
  }
  return matrix;
};
