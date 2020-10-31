const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {	
        let deeper = this.calculateDepth(arr[i]);
        if (depth < deeper + 1)
        depth = deeper + 1;
      }
    }

    return depth;
  }
};