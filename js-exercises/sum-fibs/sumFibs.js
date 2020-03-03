function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

function sumFibs(num) {
  let sum = 0;
  let fib = 0;

  while (sum <= num) {
    const currentFib = fibo(fib);
    if (currentFib % 2 === 1 && currentFib <= num) {
      sum += currentFib;
    }
    fib += 1;
  }
  return sum;
}

export { sumFibs };
