function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  var squaresArray = nums.map(getSquaresFunction);

  function getSquaresFunction(value, index, array){  
    return Math.pow(value,2);
  }

  return squaresArray;      
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  if (words.length == 1) return words.toString();

  var camelCaseWords = words.map(getCamelCaseWords);

  function getCamelCaseWords(value,index){
    if (index == 0) return value;
    return value.substring(0,1).toUpperCase() + value.substring(1,value.length);
  }

  return camelCaseWords.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  var totalSubject = 0;
  for(i = 0; i < people.length; i++)
  {
     totalSubject += parseInt(people[i].subjects.length);
  }

  return totalSubject;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
   var containsIngredients = false;

  for (i = 0; i < menu.length; i++){
    if(menu[i].ingredients.indexOf(ingredient) > -1) 
    {
      containsIngredients = true;
      break;
    }
  }
  
  return containsIngredients;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
