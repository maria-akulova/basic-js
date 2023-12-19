const { NotImplementedError } = require('../extensions/index.js');

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
  let result = [];
  const numberArr = n.toString().split("");
  for (let i = 0; i < numberArr.length; i++) {
    let temp = "";
    for (let j = 0; j < numberArr.length; j++) {
      if (i !== j) {
        temp += numberArr[j];
      }
    }
    result.push(+temp);
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
