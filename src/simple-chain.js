const CustomError = require("../extensions/custom-error");

const chainMaker = {

  res : [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    this.res.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.res.length) {
      this.res = [];
      throw new Error();
    }

    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let output = this.res.join("~~");
    this.res = [];
    return output;
  }
};

module.exports = chainMaker;
