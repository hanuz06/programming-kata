let calculateChange = function(total, cash) {
  let totalChange = cash - total;
  let cashBack = {};

  if (Math.floor(totalChange / 2000) > 0) {
    cashBack['twentyDollar'] = Math.floor(totalChange / 2000);
    totalChange = totalChange - Math.floor(totalChange / 2000) * 2000;
  }

  if (Math.floor(totalChange / 1000) > 0) {
    cashBack['tenDollar'] = Math.floor(totalChange / 1000);
    totalChange = totalChange - Math.floor(totalChange / 1000) * 1000;
  }

  if (Math.floor(totalChange / 500) > 0) {
    cashBack['fiveDollar'] = Math.floor(totalChange / 500);
    totalChange = totalChange - Math.floor(totalChange / 500) * 500;
  }


  if (Math.floor(totalChange / 200) > 0) {
    cashBack['twoDollar'] = Math.floor(totalChange / 200);
    totalChange = totalChange - Math.floor(totalChange / 200) * 200;
  }


  if (Math.floor(totalChange / 100) > 0) {
    cashBack['oneDollar'] = Math.floor(totalChange / 100);
    totalChange = totalChange - Math.floor(totalChange / 100) * 100;
  }


  if (Math.floor(totalChange / 25) > 0) {
    cashBack['quarter'] = Math.floor(totalChange / 25);
    totalChange = totalChange - Math.floor(totalChange / 25) * 25;
  }


  if (Math.floor(totalChange / 10) > 0) {
    cashBack['dime'] = Math.floor(totalChange / 10);
    totalChange = totalChange - Math.floor(totalChange / 10) * 10;
  }


  if (Math.floor(totalChange / 5) > 0) {
    cashBack['nickel'] = Math.floor(totalChange / 5);
    totalChange = totalChange - Math.floor(totalChange / 5) * 5;
  }

  cashBack['penny'] = Math.floor(totalChange / 1);

  return cashBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));