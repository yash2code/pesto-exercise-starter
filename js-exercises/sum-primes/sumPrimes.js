function sumPrimes(num) {
  let x = 2;
  let added = 2;
  while (x < num) {
    x += 1;
    for (let i = 2; i < x; i + 1) {
      if (x % i === 0) {
        break;
      } else if (i === x - 1) {
        added += x;
      }
    }
  }
  return added;
}

export { sumPrimes };
