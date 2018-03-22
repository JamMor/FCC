
function repeatStringNumTimes(str, num) {
  var finalStr = '';
  while (num > 0) {
    finalStr += str;
    num--;
  }
  return finalStr;
}
