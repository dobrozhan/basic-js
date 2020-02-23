module.exports = function createDreamTeam(members) {
  var firstLetter = [];

  if (Array.isArray(members)) {

  for (let i = 0 ; i < members.length; i++) { 
      if (typeof members[i] != 'string') { continue; }
      var result = members[i];
      var resultTrimmed = result.trim();
      firstLetter.push(resultTrimmed[0]);
  }

  firstLetter = firstLetter.map(function (arg) { return arg.toUpperCase();});
  return firstLetter.sort().join('');
} else {
  return false;
}
};