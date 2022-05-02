countCats([
  [0, 1, '^^'],
     [0, '^^', 2],
     ['^^', 1, 2]
    ])
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
countCats([
[0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arrayOneD = [].concat(...matrix)
  return arrayOneD.filter(item => item == '^^').length
}

module.exports = {
  countCats
};
