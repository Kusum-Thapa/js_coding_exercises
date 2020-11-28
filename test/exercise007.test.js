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