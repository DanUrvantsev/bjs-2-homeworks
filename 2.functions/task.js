function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current > max) {
      max = current;
    }
    if (current < min) {
      min = current;
    }
    sum += current;
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
  
  let sumEven = 0;
  let countEven = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  
  if (countEven === 0) return 0;
  return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
