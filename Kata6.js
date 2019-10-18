let repeatNumbers = function(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let a = data[i][0].toString();
    let b = data[i][1];
    result.push(a.repeat(b));
  }
  return result.toString();
};

console.log(repeatNumbers([
  [1, 10]
]));
console.log(repeatNumbers([
  [1, 2],
  [2, 3]
]));
console.log(repeatNumbers([
  [10, 4],
  [34, 6],
  [92, 2]
]));