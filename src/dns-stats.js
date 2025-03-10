const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains?.length) return {};
  const resArr = {};
  for (let i = 0; i < domains.length; i++) {
    let row = domains[i].split(".").reverse();
    let key = '';
    for (let j = 0; j < row.length; j++) {
      key += `.${row[j]}`;
      if (key in resArr) {
        resArr[key]++;
      } else resArr[key] = 1;
    }
  }
  return resArr;

}

module.exports = {
  getDNSStats
};
