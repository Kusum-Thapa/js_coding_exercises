function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map(value => (Math.pow(value, 2)));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  if (words.length == 1) return words.toString();

  return words.map((value, index) => {
    if (index == 0) return value;

    return value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
  })
    .join("");

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let totalSubject = 0;
  for (let i = 0; i < people.length; i++) {
    totalSubject += parseInt(people[i].subjects.length);
  }

  return totalSubject;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let containsIngredients = false;

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.indexOf(ingredient) > -1) {
      containsIngredients = true;
      break;
    }
  }

  return containsIngredients;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const duplicateNumArray = new Array();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && !duplicateNumArray.includes(arr1[1]) && !duplicateNumArray.includes(arr1[2]))
        duplicateNumArray.push(arr1[i]);
    }
  }

  return duplicateNumArray.sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
