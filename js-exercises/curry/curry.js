const curry = functionToCall => {
  const recursive = (n, functionToCall) => (...args) =>
    args.length >= n
      ? functionToCall(...args)
      : recursive(n - args.length, (...innerArgs) => functionToCall(...args, ...innerArgs));

  return recursive(functionToCall.length, functionToCall);
};

export { curry };
