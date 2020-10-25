const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(act) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = false;
  if (typeof(act) === 'string' && isNaN(+act) === false && +act <= 15 && +act > 0) {
    let k = Math.LN2/HALF_LIFE_PERIOD;
    res = Math.ceil((Math.log(MODERN_ACTIVITY / act) / k));
  }
 return res
};
