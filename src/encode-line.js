const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str?.length) return str;
  let res = "";
  let count = 1;
  for (let i = 1; i < str.length; i++) {

    let previous = str[i - 1];
    let current = str[i];
    if (current === previous) {
      count++;
    } else {
      res += (count === 1) ? `${previous}` : `${count}${previous}`;
      count = 1;
    }
    if (i === (str.length - 1)) {
      res += (count === 1) ? `${current}` : `${count}${current}`;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
