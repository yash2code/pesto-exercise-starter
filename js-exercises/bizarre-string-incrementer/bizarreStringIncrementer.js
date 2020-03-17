// Start your implementation here
function bizarreStringIncrementer(bizarreString) {
  return bizarreString.replace(/(\d*$)/, function(match) {
    const length = match.length;
    let incrementedValue = Number(match) + 1;

    return incrementedValue.toString(10).padStart(length, "0");
  });
}

export { bizarreStringIncrementer };
