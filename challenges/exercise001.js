function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const vatPrice = originalPrice + (vatRate * 0.01 * originalPrice);

  if (vatPrice % 1 == 0) return parseInt(vatPrice);
  else return parseFloat(Number(vatPrice).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const salePrice = originalPrice - (reduction * 0.01 * originalPrice);

  if (salePrice % 1 == 0) return parseInt(salePrice);
  else return parseFloat(Number(salePrice).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  const letterCount = str.length;
  let midPosition;
  let noOfLetter;

  if (letterCount % 2 == 0) {
    midPosition = letterCount / 2 - 1;
    noOfLetter = 2;
  }
  else {
    midPosition = letterCount / 2;
    noOfLetter = 1
  }

  return str.substring(midPosition, midPosition + noOfLetter);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return reverseWordArray = words.map((value, index, array) => (
    value.split("").reverse().join("")));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let linuxUsersCount = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].type.toUpperCase() == "LINUX") linuxUsersCount++;
  }

  return linuxUsersCount;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let totalScore = 0;

  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }

  const meanScore = totalScore / scores.length;

  if (meanScore % 1 == 0) return parseInt(meanScore);
  else return parseFloat(Number(meanScore).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 == 0 && n % 5 == 0) return "fizzbuzz";
  else if (n % 3 == 0) return "fizz";
  else if (n % 5 == 0) return "buzz";
  else return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
