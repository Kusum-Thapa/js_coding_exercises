const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  }= require("../challenges/exercise007");


  describe("sumDigits", () => {
    test("returns the sum of all the digits from given array", () => {
      expect(sumDigits([8, 9, 7])).toBe(24);
      expect(sumDigits([88, 86, 93])).toBe(267);
      expect(sumDigits([-88, 86, 93])).toBe(91);
    });
  
  });

  describe("createRange", () => {
    test("returns range of numbers as an array with the step as gap between numbers in the range and both the start and the end numbers inclusive.", () => {
      expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
      expect(createRange(3,11,3)).toEqual([3, 6, 9]);
    
    });

    test("returns is step is not provided it asssumes step to be 1.", () => {
      expect(createRange(5,10)).toEqual([5,6,7,8,9,10]);     
    });
  
    test("returns range in descending order if the end number is greater than strat number.", () => {
      expect(createRange(12,6,3)).toEqual([12,9,6]);     
    });
  });