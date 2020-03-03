function sumAll(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);

  const n = max - min + 1;
  const sum = (n * (min + max)) / 2;

  return sum;
}

export { sumAll };
