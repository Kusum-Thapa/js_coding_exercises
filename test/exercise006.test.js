const {
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

describe("isValidDNA", () => {
  /**  test("returns true if valid DNA string contain characters C, G, T or A only", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });
    test("returns true if valid DNA string contain characters C, G, T or A only", () => {
        expect(isValidDNA("GCAT")).toBe(true);
    });
   test("returns true if valid DNA string contain characters C, G, T or A only", () => {
        expect(isValidDNA("ATGCAGTCTAGACCT")).toBe(true);
    });**/
    test("returns false if valid DNA string contain characters other than C, G, T or A", () => {
        expect(isValidDNA("ATVC")).toBe(false);
    });
    test("returns false if valid DNA string contain characters other than C, G, T or A", () => {
        expect(isValidDNA("QWEWERERTYTUTY")).toBe(false);
    });
});

describe("isItPrime", () => {
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

describe("createMatrix", () => {
    test("returns  an array of 3 arrays, each filled with 3 items.", () => {
        expect(createMatrix(3, "foo")).toEqual([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
        ]);
    });

    test("returns empty array when n is 0.", () => {
        expect(createMatrix(0, "foo")).toEqual([]);

    });
    test("returns  an array of 4 arrays, each filled with 4 items.", () => {
        expect(createMatrix(4, "bar")).toEqual([
            ["bar", "bar", "bar", "bar"],
            ["bar", "bar", "bar", "bar"],
            ["bar", "bar", "bar", "bar"],
            ["bar", "bar", "bar", "bar"]
        ]);
    });
});

describe("areWeCovered", () => {
    test("returns false if the number of staff is 2 for any given day", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
        ];
        expect(areWeCovered(staff, "Monday")).toBe(false);
    });

    test("returns false if the number of staff less than 3 for any given day", () => {
        const staff1 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Kayam", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] }

        ];
        expect(areWeCovered(staff1, "Monday")).toBe(false);
    });

    test("returns true if the number of staff is 3 for any given day", () => {
        const staff1 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Kayam", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] }

        ];
        expect(areWeCovered(staff1, "Wednesday")).toBe(true);
    });
    test("returns true if the number of staff is more than 3 for any given day", () => {
        const staff1 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Kayam", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] },
            { name: "Paanas", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] }

        ];
        expect(areWeCovered(staff1, "Wednesday")).toBe(true);
    });
});




