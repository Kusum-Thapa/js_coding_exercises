const{
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered

} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([15, 3, 4, 6, 8, 20])).toBe(44);
     });
     test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([15, 3, 20, 5, 6, 21])).toBe(70);
       });
    test("returns the 0 if no numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([16, 2, 4, 7, 8, 23])).toBe(0);
       });
 });
    
describe("isItPrime", () =>{
    test("returns false for number 1", () => {
        expect(isItPrime(1)).toBe(false);
       });
       test("returns false for number 1", () => {
        expect(isItPrime(2)).toBe(true);
       });
       test("returns false for number 1", () => {
        expect(isItPrime(25)).toBe(false);
       });
       test("returns false for number 1", () => {
        expect(isItPrime(47)).toBe(true);
       });       
});