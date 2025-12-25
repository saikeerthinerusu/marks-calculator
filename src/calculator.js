function calculateResult(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  let percentage = Math.round((total / (marks.length * 100)) * 100);

  let result = percentage >= 40 ? "Pass" : "Fail";

  return {
    total: total,
    percentage: percentage,
    result: result
  };
}

module.exports = calculateResult;
