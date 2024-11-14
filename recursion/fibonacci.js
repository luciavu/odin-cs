// Iterative solution
const fibs = (num) => {
  if (num <= 0) return [];
  if (num === 1) return [0];

  let fibArray = [0, 1];

  for (let i = 2; i < num; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
};

// Recursive solution
const fibsRec = (num) => {
  console.log('This was printed recursively');
  if (num <= 0) return [];
  if (num == 1) return [0];
  if (num == 2) return [0, 1];

  const fibArray = fibsRec(num - 1);
  const nextFib = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
  return [...fibArray, nextFib];
};

const num = 8;
console.log('Fibonacci sequence via iteration:', fibs(num));
console.log('Fibonacci array via recursion:', fibsRec(num));
