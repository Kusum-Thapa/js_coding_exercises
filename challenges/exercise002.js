function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city.toUpperCase() == "MANCHESTER";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return (people <= 40) ? 1 : Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let sheepCount = 0;

  arr.forEach(element => {
    if (element == "sheep")
      sheepCount++;
  });

  return sheepCount;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  const personPostCode = person.address.postCode;

  return (personPostCode.substring(0, 1) == "M" && !personPostCode.substring(1, 2).match(/[A-Z]/i));
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
