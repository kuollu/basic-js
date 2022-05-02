const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let totalMoves = Math.pow(2, disksNumber) - 1
  let timePerTurn = 3600/turnsSpeed
  let totalTimeOfMoves = Math.floor(totalMoves * timePerTurn)
  // return `turns: ${totalMoves}, seconds: ${totalTimeOfMoves}`
  return {turns: totalMoves, seconds: totalTimeOfMoves}
}
module.exports = {
  calculateHanoi
};
