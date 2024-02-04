function makeDiagonalRed(table) {
  // Getting all rows of the table
  const rows = table.rows;
  // We go through the rows and highlight the cells diagonally in red
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    // We get the cell diagonally in the current row
    const diagonalCell = row.cells[i];
    // Highlight the cell in red
    diagonalCell.style.backgroundColor = 'red';
  }// ваш код..
}
