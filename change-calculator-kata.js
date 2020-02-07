const divide = (x, y) => { return [Math.floor(x / y), x % y] };

let calculateChange = function(total, cash) {
  let changeDue = cash - total; // change due back. The amount(in cents) we will subtract from as we fill the slots of denominations to be returned
  let currency = {};
  console.log(changeDue);
  [ currency['twentyDollar'], changeDue] = divide(changeDue, 2000);
  [ currency['tenDollar'], changeDue] = divide(changeDue, 1000);
  [ currency['fiveDollar'], changeDue] = divide(changeDue, 500);
  [ currency['twoDollar'], changeDue] = divide(changeDue, 200);
  [ currency['oneDollar'], changeDue] = divide(changeDue, 100);
  [ currency['quarter'], changeDue] = divide(changeDue, 25);
  [ currency['dime'], changeDue] = divide(changeDue, 10);
  [ currency['nickel'], changeDue] = divide(changeDue, 5);
  [ currency['penny'], changeDue] = divide(changeDue, 1);
  
  

  currencyArray = Object.keys(currency);
  for (let key of currencyArray) {
    if (currency[key] === 0) {
      delete currency[key];
    }
  }
  //delete currency.penny

  return currency;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));