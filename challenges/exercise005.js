const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const numPos = nums.indexOf(n);

  return (numPos == -1 || numPos == nums.length - 1) ? null : nums[numPos + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let zeroCount = 0, oneCount = 0;

  [...str].forEach(element => {
    if (element === "0") zeroCount++;
    else if (element === "1") oneCount++;
  });

  return { 1: oneCount, 0: zeroCount };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return parseFloat(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  const sumArray = arrs.map(x => {
    return x.reduce((a, b) => a + b, 0)
  });

  return sumArray.reduce((a, b) => a + b, 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  if (arr.length < 2) return arr;
  else {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let found = false;

  Object.keys(haystack)
    .forEach(k => {
      if (haystack[k].toString().toLowerCase()
        .includes(searchTerm.toLowerCase())) { found = true }
    });

  return (found);
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const words = str.toLowerCase().replace(/[!?;:.,]\B/g, '').split(/\s/);

  const freqMap = {};
  words.forEach(w => {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });

  return freqMap;
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
