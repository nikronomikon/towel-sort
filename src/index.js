
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res;
  
  if (!matrix || matrix.length === 0) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if ( i % 2 != 0) {
      matrix[i].reverse();
    }
    // if ( i % 2 != 0) {
    //   matrix[i].sort((a, b) => a - b);
    // } else {
    //   matrix[i].sort((a, b) => a - b).reverse();
    // }
  }
  res = matrix.toString().split(',').map((a) => parseFloat(a));
  return res;
}
