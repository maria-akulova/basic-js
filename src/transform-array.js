const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-preval', 4, 5]) => [1, 2, 4, 5]
 * 
 */

class DataTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataTypeError";
  }
}

function transform(arr) {
  if (!Array.isArray(arr)) throw new DataTypeError('\'arr\' parameter must be an instance of the Array!');

  let result = arr.flatMap((val, index, ar) => {
    let initvalalue = val;
    let controls = ['--double-next', '--discard-next', '--discard-prev', '--double-prev'];
    if (ar[index - 1] === '--double-next') val = [val, val];
    if (ar[index - 1] === '--discard-next') val = [-1];
    if (ar[index + 1] === '--discard-prev') val = [...val].pop();
    if (ar[index + 1] === '--double-prev') {
      if (Array.isArray(val) && val.indexOf(-1) !== -1) return [];
      if (Array.isArray(val)) val = [...val, initvalalue]
      else val = [val, val];
    };

    if (controls.indexOf(val) !== -1) return [];
    if (Array.isArray(val)) return val.flatMap((el) => el);
    return val;
  }).filter((el) => el !== -1);
  return result;
}

module.exports = {
  transform
};
