
function mutation(arr) {
  var uniqueLetters = {};
  var letters = arr[0].toLowerCase().split('');
  letters.forEach(function(element) {
    uniqueLetters[element] = true;
  })
  var compareLetters = arr[1].toLowerCase().split('');
  for (i = 0; i < compareLetters.length; i++) {
    if (uniqueLetters.hasOwnProperty(compareLetters[i]) === false) {
      return false;
    }
  }
  return true;
}


//======================= A version using indexOf =======================

function mutation2(arr) {
  var basketString = arr[0].toLowerCase();
  var letters = arr[1].toLowerCase().split('');
  for (var i = 0; i < letters.length; i++) {
    if (basketString.indexOf(letters[i]) < 0) {
      return false;
    }
  }
return true;
}
