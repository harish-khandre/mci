// Function to update rooms with distances from gates
const wallsAndGates = (rooms) => {
  // Initialize a queue with gate positions
  const queue = searchGrid(rooms);

  // Perform breadth-first search
  bfs(rooms, queue);
};

// Function to find gate positions and enqueue them
const searchGrid = (rooms, queue = new Queue([])) => {
  const [rows, cols] = [rooms.length, rooms[0].length];

  // Iterate through each cell in the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Check if the current cell is a gate (value 0)
      const isGate = rooms[row][col] === 0;
      if (!isGate) continue;

      // Enqueue the gate position
      queue.enqueue([row, col]);
    }
  }

  return queue;
};

// Perform breadth-first search on the rooms
const bfs = (rooms, queue) => {
  // Continue until the queue is empty
  while (!queue.isEmpty()) {
    // Process each element in the queue
    for (let i = queue.size() - 1; 0 <= i; i--) {
      // Check neighbors of the current position
      checkNeighbors(rooms, queue);
    }
  }
};

// Update neighboring cells and enqueue them if they are unreachable
const checkNeighbors = (rooms, queue) => {
  const [rows, cols] = [rooms.length, rooms[0].length];
  // Dequeue the current position
  const [row, col] = queue.dequeue();

  // Iterate through neighbors of the current position
  for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
    // Check if the neighbor is an unreachable cell
    const isINF = rooms[_row][_col] === 2147483647; /* (2 ** 31) - 1 */
    if (!isINF) continue;

    // Update the distance and enqueue the neighbor
    rooms[_row][_col] = rooms[row][col] + 1;
    queue.enqueue([_row, _col]);
  }
};

// Get valid neighboring positions
const getNeighbors = (row, rows, col, cols) =>
  [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
    .map(([_row, _col]) => [row + _row, col + _col])
    .filter(
      ([_row, _col]) => 0 <= _row && 0 <= _col && _row < rows && _col < cols,
    );
