
function largestOfFour(arr) {
  var largest = [];
  arr.forEach(function(subArr) {
    var maxNum = subArr.reduce(function(x,y) {
      return Math.max(x,y);
    });
    largest.push(maxNum);
  });
  return largest;
}
