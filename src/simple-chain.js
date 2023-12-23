const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') value = " ";
    if (value === null) value = "null";
    this.chains.push(value.valueOf());
    return this;
  },
  removeLink(position) {
    if (position < 1 || position >= this.chains.length || typeof position !== 'number' || !Number.isFinite(position) || !Number.isInteger(position)) {
      this.chains = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let startRow = "";
    let result = "";
    for (let i = 0; i < (this.chains.length - 1); i++) {
      startRow += `( ${this.chains[i]} )~~`;
    }
    result = startRow + `( ${this.chains.at(-1)} )`;
    this.chains = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
