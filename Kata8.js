const multiplicationTable = function(maxValue) {
  let result = '';
  //rows
  for (let i = 1; i <= maxValue; i++) {
    //columns. 'j++' is multiplication
    for (let j = 1; j <= maxValue; j++) {
      result += (i * j) + ' ';
    }
    result += '\n';
  }
  return result;
};

//console.log(multiplicationTable(1));
//console.log(multiplicationTable(5));
console.log(multiplicationTable(10));