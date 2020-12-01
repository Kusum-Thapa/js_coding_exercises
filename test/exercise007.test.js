const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");


describe("sumDigits", () => {
  test("returns the sum of all the digits from given array", () => {
    expect(sumDigits([8, 9, 7])).toBe(24);
    expect(sumDigits([88, 86, 93])).toBe(267);
    expect(sumDigits([-88, 86, 93])).toBe(91);
  });

});

describe("createRange", () => {
  test("returns range of numbers as an array with the step as gap between numbers in the range and both the start and the end numbers inclusive.", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(3, 11, 3)).toEqual([3, 6, 9]);
  });

  test("returns is step is not provided it asssumes step to be 1.", () => {
    expect(createRange(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  test("returns range in descending order if the end number is greater than strat number.", () => {
    expect(createRange(12, 6, 3)).toEqual([12, 9, 6]);
  });
});

describe("getScreentimeAlertList", () => {
  test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
      },
    ];
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
  });

  test("returns an empty array  if the sage is not more than 100 minutes of screentime for a given date.", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
      },
    ];
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
  });
});

describe("checkRowWinners", () => {
  test("returns winner of any row of noughts and crosses board", () => {
    const board =
      [
        ["X", "0", null],
        ["X", "X", "X"],
        ["0", null, "0"]
      ]; expect(findWinner(board)).toBe("X");

    const board1 =
      [
        ["X", "0", null],
        ["X", null, "X"],
        ["0", "0", "0"]
      ]; expect(findWinner(board1)).toBe("0");

    const board2 =
      [
        ["X", "X", "X"],
        ["X", "0", null],
        ["0", "0", null]
      ]; expect(findWinner(board2)).toBe("X");

    const board3 =
      [
        ["X", "X", null],
        ["X", "0", null],
        ["0", "0", null]
      ]; expect(findWinner(board3)).toBe(null);
  });
});

describe("checkColWinners", () => {
  test("returns winner of any column of noughts and crosses board", () => {
    const board =
      [
        ["X", "0", null],
        ["X", "X", "0"],
        ["X", null, "0"]
      ]; expect(findWinner(board)).toBe("X");

    const board1 =
      [
        ["X", "0", null],
        ["X", "0", "X"],
        ["0", "0", null]
      ]; expect(findWinner(board1)).toBe("0");

    const board2 =
      [
        [null, "X", "X"],
        [null, "0", "X"],
        ["0", "0", "X"]
      ]; expect(findWinner(board2)).toBe("X");

    const board3 =
      [
        ["X", "X", null],
        ["X", "0", null],
        ["0", "0", null]
      ]; expect(findWinner(board3)).toBe(null);
  });
});


describe("checkDiagonallWinners", () => {
  test("returns winner of any column of noughts and crosses board", () => {
    const board =
      [
        ["X", "0", null],
        ["X", "X", "0"],
        ["0", null, "X"]
      ]; expect(findWinner(board)).toBe("X");

    const board1 =
      [
        ["X", "0", "0"],
        ["X", "0", "X"],
        ["0", null, null]
      ]; expect(findWinner(board1)).toBe("0");
  });
});