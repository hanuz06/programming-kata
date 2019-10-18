let camelCase = function(input) {
  let result = [];
  let arr = input.split(" ");
  result.push(arr[0].toLowerCase());
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
  }
  return result.join("");
};

console.log(camelCase("This is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));