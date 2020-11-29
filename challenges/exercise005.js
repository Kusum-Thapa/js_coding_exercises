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

  for(var i = 0; i < str.length; i++){
    if(str[i] == 0) zeroCount++;
    else if(str[i] == 1) oneCount++;    
  }

  const result = {1 : oneCount, 0 : zeroCount};
  return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  return  parseFloat(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  var sumArray= arrs.map(x => {
     return x.reduce((a,b) => a + b, 0)
  });

   return sumArray.reduce((a,b) => a + b, 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length < 2) return arr;
  else{ 
     [arr[0] , arr[arr.length-1]] = [arr[arr.length - 1] , arr[0]];
     return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  var found = false;

  Object.keys(haystack)
     .forEach(k => {
      if (haystack[k].toString().toLowerCase()
          .includes(searchTerm.toLowerCase())) 
          {found =true};         
     });
     
     return(found);
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var words = str.toLowerCase().replace(/[!?;:.,]\B/g, '').split(/\s/);
 
  var freqMap = {};
    words.forEach(w => {
        if (!freqMap[w])
        {        
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
