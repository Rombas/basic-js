const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {turns: 0, seconds: 0};
  for (let i = 0; i < disksNumber; i++){
    answer.turns += Math.pow(2,i);
  }
  answer.seconds = Math.floor(answer.turns / (turnsSpeed / 3600)) ;
  return answer;
};
