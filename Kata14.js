const squareCode = function(message) {
  //let test = "";
  //let result = [];
  let text = message.replace(/\s+/g, "");
  let colLength = Math.ceil(Math.sqrt(text.length));

  let stringResult = "";

  for (let i = 0; i < colLength; i++) {
    for (let j = i; j < text.length; j += colLength) {
      stringResult += text[j];
    }
    stringResult += " ";
  }
  return stringResult;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));