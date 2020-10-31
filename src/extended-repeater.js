const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  if (str === null) str = 'null';
  let repeatTime = options.repeatTimes;
  let additionRepeatTime = options.additionRepeatTimes;
  let separato = options.separator;
  let additionSeparato = options.additionSeparator;
  let additio = options.addition;

  if (options.addition == undefined) additio = ''; 
  if (options.addition === null) additio = 'null';
  else additio = additio.toString();
  if (separato == undefined) separato = '+'; 
  if (options.repeatTimes == undefined) repeatTime = 1; 
  if (options.additionRepeatTimes == undefined) additionRepeatTime = 1; 
  if (additionSeparato == undefined) additionSeparato = '|';
  

     for (let i = 0; i < repeatTime; i++ ){
      res += str.toString();
      
       for (let j = 0; j < additionRepeatTime; j++){
        if (j + 1 == additionRepeatTime) res += additio;
         else res += additio + additionSeparato;
       }
       if (i + 1 !== repeatTime) res += separato;
     }
  return res;
 };
  
