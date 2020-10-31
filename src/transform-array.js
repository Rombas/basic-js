const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let res = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] === '--discard-next')
    {
      i++;
    }
    else if (arr[i] === '--discard-prev')
    {
      if( (j > 0) && (arr[i-2] !== '--discard-next') ) j--; 
      if  (i == arr.length-1) res.pop();     
    }
    else if (arr[i] === '--double-next')
    {
      if (i+1 < arr.length){
      res[j] = arr[i + 1];
      j++;
      }
    }
    else if (arr[i] === '--double-prev')
    {
      if ( (i > 0) && (arr[i-2] !== '--discard-next')){
      res[j] = arr[i - 1];
      j++;
      }
    }
    else {
      res[j] = arr[i];
      j++;
    }
  }
    return res;
};