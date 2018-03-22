
function getIndexToIns(arr, num) {
  var indexNum = 0;
  arr.forEach(function(element){
    if (element < num) {
      indexNum += 1;
    }
  });
  return indexNum;
}
