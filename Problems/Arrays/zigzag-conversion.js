const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }

  // Initialize variables for tracking the current row and direction
  let currentRow = 0;
  let currentDirection = -1;
  // Create an array to hold the rows, initialized with empty strings
  let rows = new Array(numRows).fill("");

  // Loop through each character in the input string
  for (char of s) {
    // Append the character to the current row
    rows[currentRow] += char;

    // If the current row is the first or last row, change direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      currentDirection *= -1;
    }

    // Move to the next row based on the current direction
    currentRow += currentDirection;
  }

  // Join all rows into a single string and return
  return rows.join("");
};
