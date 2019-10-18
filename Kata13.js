const urlDecode = function(text) {
  let splitText = text.split('&');
  let index = 0;
  let key = "";
  let value = "";
  let data = {};

  for (let i = 0; i < splitText.length; i++) {
    index = splitText[i].indexOf("=");
    key = splitText[i].substring(0,index);
    value = splitText[i].substring(index + 1).replace(/%20/g," ");
    data[key] = value;
  }
  return data;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
