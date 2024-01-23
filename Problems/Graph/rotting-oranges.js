const orangesRotting = (grid) => {
	// Check if the grid is not provided.
	if (!grid) return 0;

	// Get the number of rows and columns in the grid.
	const rowlen = grid.length;
	const collen = grid[0].length;

	// Initialize variables to track fresh oranges count, minutes elapsed, and a queue for BFS.
	let freshCount = 0;
	let minutes = 0;
	const queue = [];

	// Count fresh oranges and add rotten ones to the queue.
	for (let i = 0; i < rowlen; i++) {
		for (let j = 0; j < collen; j++) {
			if (grid[i][j] === 1) freshCount++;
			else if (grid[i][j] === 2) queue.push([i, j, 0]); // Rotten orange coordinates and time.
		}
	}

	// Perform BFS to simulate the rotting process.
	while (queue.length > 0) {
		// Define possible directions: up, down, left, right.
		const direction = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		];

		// Dequeue the front element from the queue.
		const [row, col, currmin] = queue.shift();

		// Update the total minutes elapsed.
		minutes = Math.max(minutes, currmin);

		// Check each direction and rot adjacent fresh oranges.
		for (const [dr, dc] of direction) {
			const newrow = row + dr;
			const newcol = col + dc;

			// Check if the new position is within the grid boundaries and contains a fresh orange.
			if (
				newrow >= 0 &&
				newrow < rowlen &&
				newcol >= 0 &&
				newcol < collen &&
				grid[newrow][newcol] === 1
			) {
				// Mark the fresh orange as rotten, decrement fresh count, and enqueue the new position.
				grid[newrow][newcol] = 2;
				freshCount--;
				queue.push([newrow, newcol, currmin + 1]);
			}
		}
	}

	// Return the total minutes if all oranges have rotted, otherwise, return -1.
	return freshCount === 0 ? minutes : -1;
};
