function sumSalary(salaries) {
  let sumSalaries = 0;
  for (let i in salaries) {
    isFinite(salaries[i]) ? sumSalaries += salaries[i] : sumSalaries;
  }
  return sumSalaries;
}
