const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = false;
  let res_arr = [];
  if(Array.isArray(array)) {
    array.flat();
    array.forEach(el => {
      if (typeof(el) === 'string') {
        el = el.trim();
        res_arr.push(el[0].toUpperCase());
      }
    })
    res = res_arr.sort().join('');
  }
return res
};
