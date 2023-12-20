const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let res = "";
  let extention = "";
  let repeatTimes = options.repeatTimes ?? 1;
  let addition = String(options.addition ?? "");
  let additionTimes = options.additionRepeatTimes ?? 1;
  let additionSeparator = String(options.additionSeparator ?? "|");
  let separator = String(options.separator ?? "+");

  if (options.addition === null) addition = "null";

  if (addition) {
    for (let j = 0; j < additionTimes; j++) {
      extention += addition;
      if ((j + 1) !== additionTimes) {
        extention += additionSeparator;
      }
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    res += str + extention;
    if ((i + 1) !== repeatTimes) {
      res += separator;
    }
  }
  return res;
}

module.exports = {
  repeater
};
