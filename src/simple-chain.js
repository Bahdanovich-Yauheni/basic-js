const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  direction: true,
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
      if (value === '') {
        this.chain.push('( )')
        }
        else {
          this.chain.push(`( ${value} )`)
        }
    return this
    
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (position > this.chain.length || position < 0 || !position) {
      throw new Error('wrong position');
    }
    else {
      this.chain.splice(position, 1);
    }
    return this
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.join('~~');
  }
};

module.exports = chainMaker;
