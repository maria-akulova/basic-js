const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrToSort = [];
  let counter = 0;
  arr.map((el) => { if (el !== -1) arrToSort.push(el); return 0 });
  arrToSort = arrToSort.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = arrToSort[counter++];
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
