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

  people.forEach(person => { totalSubject += parseInt(person.subjects.length); });
  return totalSubject;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let containsIngredients = false;
  menu.forEach(menuItem => {
    if (containsIngredients) return;
    if (menuItem.ingredients.includes(ingredient))
      containsIngredients = true;
    return;
  })

  return containsIngredients;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const duplicateNumArray = arr1.filter(value => arr2.includes(value)).sort((a, b) => a - b);

  return [...new Set(duplicateNumArray)];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
