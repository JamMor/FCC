function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  var fixedWords = words.map(function (x) {
    return x.slice(0,1).toUpperCase() + x.slice(1);
  })
  return fixedWords.join(' ');
}
