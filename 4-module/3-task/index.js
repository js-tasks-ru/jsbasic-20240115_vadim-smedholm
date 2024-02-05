function highlight(table) {
  // We get all the rows of the table, excluding the header
  const rows = table.querySelectorAll('tbody tr');

  // Looping through each row of the table
  rows.forEach(row => {
      // Getting the cells of the current row
      const cells = row.cells;

      // Set the class 'available' or 'unavailable' depending on the value of the 'data-available' attribute
      const statusCell = cells[3];
      if (statusCell.dataset.available === 'true') {
          row.classList.add('available');
      } else if (statusCell.dataset.available === 'false') {
          row.classList.add('unavailable');
      } else {
          row.setAttribute('hidden', 'true');
      }

      // Set the class 'male' or 'female' depending on the value of the 'Gender' cell
      const genderCell = cells[2];
      if (genderCell.textContent === 'm') {
          row.classList.add('male');
      } else if (genderCell.textContent === 'f') {
          row.classList.add('female');
      }

      // Add the 'text-decoration: line-through' style if the 'Age' cell value is less than 18
      const ageCell = cells[1];
      if (parseInt(ageCell.textContent) < 18) {
          row.style.textDecoration = 'line-through';
      }
  });
}// ваш код...

