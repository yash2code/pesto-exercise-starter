function flipArgs(func) {
  return function() {
    return func(...Array.from(arguments).reverse());
  };
}

export { flipArgs };
