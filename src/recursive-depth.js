const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depthMassive = []
    for (let i=0; i<arr.length ; i++) {
      if (Array.isArray(arr[i])) {
        depthMassive.push(this.calculateDepth(arr[i]))
      }
    }
    let what = depthMassive.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue), 0);
    return 1+what
  }
}

module.exports = {
  DepthCalculator
};
