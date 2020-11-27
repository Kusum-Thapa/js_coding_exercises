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
  
  if(people <= 40) return 1;
  else return Math.ceil(people / 40);

}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  
  var sheepCount = 0;
  
  for(i = 0; i <= arr.length; i++)
  {
    if(arr[i]  == "sheep") sheepCount++;
  }

  return sheepCount;  
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  
  var personPostCode = person.address.postCode;

  return (personPostCode.substring(0,1) == "M" && !personPostCode.substring(1,2).match(/[a-z]/i));
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
