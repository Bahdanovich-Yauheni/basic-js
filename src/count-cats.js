const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = [];
  array.forEach(el => {
    let arr = el.filter(element => (element === '^^' || element === "^^"));
    if (arr.length){
      arr.forEach(el => res.push(el))
    }
  })
  return res.length
};
