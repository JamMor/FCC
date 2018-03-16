function destroyer(arr) {
  var unDesArr = arguments[0];
  var targets = [];
  for (var i = 1; i < arguments.length; i++) {
    targets[i] = arguments[i];
  }
  return unDesArr.filter(function(element){
    return targets.indexOf(element) < 0;
  });
}
