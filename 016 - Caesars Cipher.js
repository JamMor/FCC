
function rot13(str) { // LBH QVQ VG!
  var decodedStr = "";
  for (var i = 0; i < str.length; i++) {
    var charNum = str.charCodeAt(i);
    if (charNum >= 65 && charNum <= 77) {
      charNum += 13;
    } else if (charNum >= 78 && charNum <= 90) {
      charNum -= 13;
    }
    decodedStr += String.fromCharCode(charNum);
  }
  return decodedStr;
}

