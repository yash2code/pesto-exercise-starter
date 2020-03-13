function leastCommonMultiple(...args) {
  const gcd = (a, b) => (a ? gcd(b % a, a) : b);

  const lcm = (a, b) => (a * b) / gcd(a, b);

  return args.reduce(lcm);
}

export { leastCommonMultiple };
