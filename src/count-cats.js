module.exports = function countCats(matrix) {
 if (typeof matrix !== 'undefined' || matrix != []) {

  var number = 0;

  for (let i = 0; i < matrix.length; i++) {
    
    for (let j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] == '^^') {
        number++;
      }
    }

  }
  return number;
 } else {
   return 0;
 }
};
