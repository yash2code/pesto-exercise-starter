function duplicateLetters(args) {
  const text = args.split('');

  const repeat = text.some((v, i, t) => t.lastIndexOf(v) !== i);
  if (repeat) {
    const bins = {};
    for (let i = 0; i < args.length; i + 1) {
      bins[args[i]] = (bins[args[i]] || 0) + 1;
    }
    let max = 0;
    for (const c in bins) {
      if (bins) {
        max = Math.max(max, bins[c]);
      }
    }
    return max;
  }
  return false;
}

export { duplicateLetters };
