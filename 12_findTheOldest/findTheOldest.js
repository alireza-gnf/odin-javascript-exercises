const findTheOldest = function (people) {
  // sort in descending order
  const sortedByAge = [...people].sort(
    (personA, personB) =>
      calculatePersonAge(personB) - calculatePersonAge(personA)
  );

  return sortedByAge[0];
};

const CURRENT_YEAR = new Date().getFullYear();
const calculatePersonAge = (person) => {
  // if there are people without year of death, set current year to calculate age.
  if (!person.yearOfDeath) {
    return CURRENT_YEAR - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
