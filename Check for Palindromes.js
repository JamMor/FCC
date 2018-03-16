function palindrome(str) {
  var lowerSimpleStr = str.toLowerCase().replace(/[\W_]/g,'');
  var revStr = lowerSimpleStr.split('').reverse().join('');
  return lowerSimpleStr == revStr;
}
