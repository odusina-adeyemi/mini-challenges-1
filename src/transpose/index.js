/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
// function transpose(array) {

    // function transpose(array) {
    //     return array[0].map((col, i) => array.map(row => row[i]));
    //   }
      
    //   function transpose(array) {
    //     return array[0].map((col, c) => array.map((row, r) => array[r][c]));
    //   }

    // function transpose(array) {
       
    //     number = array.reduce((prev, next) => next.map((item, i) =>
    //       (prev[i] || []).concat(next[i])
    //     ), []);
    //     return number
    //   }

      function transpose(array) {
        const rows = array.length, cols = array[0].length; 
        const grid = []; 
        for (let j = 0; j < cols; j++) { 
            grid[j] = Array(rows);
         } 
         for (let i = 0; i < rows; i++) {
         for (let j = 0; j < cols; j++) {
            grid[j][i] = array[i][j]; 
            } 
        } 
            return grid;
        }

module.exports = transpose;
