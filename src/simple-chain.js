const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    position--;
    if (!Number.isInteger(position) || position >= this.chain.length || position < 0){
      this.chain = []
      throw new Error ("You can't remove incorrect link!")
    }
  this.chain.splice (position, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = `( ${this.chain.join(' )~~( ')} )`
    this.chain = []
    return result
    }
};
console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
module.exports = {
  chainMaker
};
