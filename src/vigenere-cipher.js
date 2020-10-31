const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(typeOfMachine){
    if (typeOfMachine == false) this.type = 'reverseMachine';
    else this.type = 'directMachine';
  }
  encrypt(str, key) {
    let output = [];
    let result = 0;
    let res_str;
    let str_buff;
    let key_buff;
    str = str.toLowerCase();
    key = key.toLowerCase();
    let j = 0;

    for (var i = 0; i < str.length; i++) {
      str_buff = str.charCodeAt(i);
      key_buff =key.charCodeAt((i - j) % key.length);
      if ((str_buff - 96 > 0) && (str_buff - 96 < 27)){
        
      result = (((str_buff - 97) + (key_buff - 97)) % 26);
      output[i] = String.fromCharCode(result + 97);
    }
      else {
        output[i] = str[i];
        j++;
      }
    }

    
    if (this.type === 'directMachine' ) res_str = output.join('');
    if (this.type === 'reverseMachine' ) res_str = output.reverse().join('');
    return res_str.toUpperCase();
  }    


  decrypt(str, key) {

    let output = [];
    let result = 0;
    let res_str;
    let str_buff;
    let key_buff;
    let j = 0;
    str = str.toLowerCase();
    key = key.toLowerCase();
    // str = str.toUpperCase();
    // key = key.toUpperCase();

    for (var i = 0; i < str.length; i++) {
      str_buff = str.charCodeAt(i);
      key_buff = key.charCodeAt((i - j) % key.length);
      if ((str_buff - 96 > 0) && (str_buff - 96 < 27)){
        
      result = (((str_buff - 97) - (key_buff - 97)) % 26);
      if (result >=  0 )
      output[i] = String.fromCharCode(result + 97);
      else output[i] = String.fromCharCode(result + 123);
    }
      else {
        output[i] = str[i];
        j++;
      }
    }
    if (this.type === 'directMachine' ) res_str = output.join('');
    else res_str = output.reverse().join('');
    return res_str.toUpperCase();

  }
}

module.exports = VigenereCipheringMachine;
