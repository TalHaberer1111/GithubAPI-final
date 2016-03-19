var getRepos = function(response) {
  var i = 0;
  var arr = [];
  while (i < response.length) {
    arr.push((response[i]));
    i++;
  }
  return arr;
}

exports.ModuleOne = getRepos;
