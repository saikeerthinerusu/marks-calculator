/**
 * Marks Calculator
 * ----------------
 * You must complete this function.
 * 
 * @param {number[]} marks - Array of student marks
 * @returns {Object} result object with total, percentage and result
 */

function calculateResult(marks) {
  // 1. Calculate total marks
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  // 2. Calculate percentage
  let percentage = Math.round((total / (marks.length * 100)) * 100);

  // 3. Decide Pass or Fail
  let result = percentage >= 40 ? "Pass" : "Fail";

  // 4. Return object in the required format
  return {
    total: total,
    percentage: percentage,
    result: result
  };
}

module.exports = calculateResult;