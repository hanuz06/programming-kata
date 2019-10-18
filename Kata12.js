const makeCase = (input, case1) => {

  let caseType = [];
  if (typeof case1 === "string") {
    caseType.push(case1);
  } else {
    //caseType = caseType.concat(case1);
    caseType = [...caseType,...case1];
  }

  for (let i = 0; i < caseType.length; i++) {
    if (caseType[i] === 'camel') {
      input = input.replace(/^(\w{1})/, x => x.toLowerCase());
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/[-_ ]/g, '');
    } else if (caseType[i] === 'pascal') {
      input = input.replace(/^(\w{1})/, x => x.toUpperCase());
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/[-_ ]/g, '');
    } else if (caseType[i] === 'snake') {
      input = input.replace(/[- ]/g, '_');
    } else if (caseType[i] === 'kebab') {
      input = input.replace(/[_ ]/g, '-');
    } else if (caseType[i] === 'title') {
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/^(\w{1})/, x => x.toUpperCase());
    } else if (caseType[i] === 'vowel') {
      input = input.replace(/[^aeiou]/ig, x => x.toLowerCase());
      input = input.replace(/[aeiou]/g, x => x.toUpperCase());
    } else if (caseType[i] === 'consonant') {
      input = input.replace(/[aeiou]/ig, x => x.toLowerCase());
      input = input.replace(/[^aeiou]/g, x => x.toUpperCase());
    } else if (caseType[i] === 'upper') {
      input = input.replace(/\w/g, x => x.toUpperCase());
    } else if (caseType[i] === 'lower') {
      input = input.replace(/\w/g, x => x.toLowerCase());
    }
  }
  return input;
};

//In regex [-_ ], '_' means space, '-' means some character(range).

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));







// if (caseType[i] === 'camel') {
//   input => {
//     let result = [];
//     let arr = input.split(" ");
//     result.push(arr[0]);
//     for (var i = 1; i < arr.length; i++) {
//       result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
//     }
//     return input = result.join("");
//   };
// };

// if (caseType[i] === 'pascal') {
//   input => {
//     let result = [];
//     let arr = input.split(" ");
//     for (var i = 0; i < arr.length; i++) {
//       result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
//     }
//     return input = result.join("");
//   };
// };

// if (caseType[i] === 'snake') {
//   input => {
//     let result = [];
//     let arr = input.split(" ");
//     return input = result.join("_");
//   };
// };

// if (caseType[i] === 'kebab') {
//   input => {
//     let result = [];
//     let arr = input.split(" ");
//     return input = result.join("-");
//   };
// };

// if (caseType[i] === 'title') {
//   input => {
//     let result = [];
//     let arr = input.split(" ");
//     for (var i = 0; i < arr.length; i++) {
//       result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
//     };
//     return input = result.join(" ");
//   };
// };

// if (caseType[i] === 'vowel') {
//   input => {
//     for (var i = 0; i < arr.length; i++) {
//       input.replace(/[aeiou]/g, x => x.toUpperCase());
//     };
//     return input;
//   };
// };

// if (caseType[i] === 'consonant') {
//   input => {
//     for (var i = 0; i < arr.length; i++) {
//       input.replace(/[^aeiou]/g, x => x.toUpperCase());
//     };
//     return input;
//   };
// };
// if (caseType[i] === 'upper') {
//   input => {
//     for (var i = 0; i < arr.length; i++) {
//       input.replace(/\w/g, x => x.toUpperCase());
//     };
//     input;
//   };
// };