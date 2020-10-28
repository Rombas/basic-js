const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = [];
    if (!Array.isArray(members)) return false;
    for (let i = 0; i < members.length; i++){
      if (typeof members[i] === 'string'){
        team[i] = members[i].trim().slice(0,1).toUpperCase();
      }
    }
    return team.sort().join('');
};
