const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const res = members.reduce((ac, cur) => {
    if (typeof cur === 'string') {
      return [...ac, cur.trim()[0].toUpperCase()];
    } else return [...ac];
  }, []);
  if (!res?.length) {
    return false;
  } else return res.sort().join("");
}

module.exports = {
  createDreamTeam
};
