function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
   return nums.filter(n => {  
      return n < 1;
    });
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  return names.filter(n =>{
      return n.charAt(0) == char;
  });
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  return words.filter(w =>{
     var word = w.split(" ");
     if (word[0].toUpperCase() == "TO") return word;
  });

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required")
  
  return nums.filter(n => {
    return Number.isInteger(n);
  });
}

function getCities(users) {
  if (!users) throw new Error("users is required");
   var citiesArr = new Array();
  
   for(i =0; i < users.length; i++)
  {
    citiesArr.push((users[i].data.city.displayName));
  }

  return citiesArr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
