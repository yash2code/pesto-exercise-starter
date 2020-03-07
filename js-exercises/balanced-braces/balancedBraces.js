const balancedBraces = string => {
  const open = [];

  const openBrackets = new Set(['(', '[', '{']);

  const bracketCorrespondence = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const c of string) {
    if (openBrackets.has(c)) {
      open.push(c);
    } else if (
      bracketCorrespondence[c]
      && open.pop() !== bracketCorrespondence[c]
    ) {
      return false;
    }
  }

  return !open.length;
};

export { balancedBraces };
