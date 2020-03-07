const compareNames = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};

const compareLegs = (a, b) => {
  const numberOfLegsA = a.numberOfLegs;
  const numberOfLegsB = b.numberOfLegs;

  let comparison = 0;
  if (numberOfLegsA > numberOfLegsB) {
    comparison = 1;
  } else if (numberOfLegsA < numberOfLegsB) {
    comparison = -1;
  }
  return comparison;
};

const animalSort = animals => {
  animals.sort(compareNames);

  return animals.sort(compareLegs);
};

export { animalSort };
