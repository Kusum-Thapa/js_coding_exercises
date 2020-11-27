const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  var numPos = nums.indexOf(n);

  if(numPos == -1 || numPos == nums.length-1)  return null;
  else  return nums[numPos + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  var zeroCount = 0;
  var oneCount = 0;

  for(i = 0; i < str.length; i++)
  {
    if(str[i] == 0) zeroCount++;
    else if(str[i] == 1) oneCount++;    
  }
  const result = {1 : oneCount, 0 : zeroCount};
  return result;
};
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
