
/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString().split('')
  let allOptionsOfNumbers = []
  for (let i = 0; i < number.length; i++) {
    allOptionsOfNumbers.push(Number(number.filter((item, index) => index !== i).join('')))
  }
  console.log(allOptionsOfNumbers)
  return allOptionsOfNumbers.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue), 0);
}
deleteDigit(142)
module.exports = {
  deleteDigit
};
