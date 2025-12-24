const calculateResult = require("../src/calculator");

// 20 MARKS
test("Calculates correct total", () => {
  const result = calculateResult([80, 90, 70, 60]);
  expect(result.total).toBe(300);
});

// 25 MARKS
test("Calculates correct percentage", () => {
  const result = calculateResult([80, 90, 70, 60]);
  expect(result.percentage).toBe(75);
});

// 20 MARKS
test("Determines Pass correctly", () => {
  const result = calculateResult([80, 90, 70, 60]);
  expect(result.result).toBe("Pass");
});

// 20 MARKS
test("Determines Fail correctly", () => {
  const result = calculateResult([10, 20, 30]);
  expect(result.result).toBe("Fail");
});

// 15 MARKS
test("Rounds percentage correctly", () => {
  const result = calculateResult([33, 33, 34]);
  expect(result.percentage).toBe(33);
});
