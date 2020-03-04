const limitFunctionCallCount = (methodToWrap, totalCount) => {
  if (!totalCount) return () => null;
  let count = 0;
  return function() {
    count += 1;
    if (count > totalCount) {
      return null;
    }
    return methodToWrap(...arguments);
  };
};

export { limitFunctionCallCount };
