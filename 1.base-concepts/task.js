"use strict";

function solveEquation(a, b, c) {
 
  const discriminant = b ** 2 - 4 * a * c;
  let arr = [];

  if (discriminant > 0) {
    const sqrtD = Math.sqrt(discriminant);
    const root1 = (-b + sqrtD) / (2 * a);
    const root2 = (-b - sqrtD) / (2 * a);
    arr.push(root1, root2);
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const convert = value => {
    const num =parseFloat (value);
    return isNaN(num) ? false : num;
  };

  const p = convert (percent);
  let c = convert (contribution);
  let a = convert (amount);
  const n = convert (countMonths);

  if([p, c, a, n].includes(false)) return false;

  c = Math.min (c, a);
  a = Math.max (a-c, 0);

  const montlyRate = p / 100 / 12;

  const paymant = a * ( montlyRate + montlyRate / ((1+montlyRate) ** n -1));
  
  const total = paymant * n;
  return Math.round(total * 100) / 100;
}
