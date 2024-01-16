class TrieNode {
	constructor() {
		this.children = new Map(); // Map to store child nodes
		this.isEnd = false; // Flag to indicate if the node represents the end of a word
	}

	insert(word) {
		let node = this;
		for (const char of word) {
			if (!node.children.has(char)) {
				node.children.set(char, new TrieNode()); // Create a new node if the character is not present
			}
			node = node.children.get(char);
		}
		node.isEnd = true; // Mark the last node as the end of the inserted word
	}
}

const findWords = (board, words) => {
	const m = board.length;
	const n = board[0].length;
	const trie = new TrieNode(); // Trie data structure to store the words
	const result = []; // Array to store the found words

	// Build Trie with words
	for (const word of words) {
		trie.insert(word);
	}

	// Helper function to perform DFS on the board
	const dfs = (node, x, y, path) => {
		const char = board[x][y];

		if (!node.children.has(char)) {
			return; // If the current character is not in the trie, stop the DFS
		}

		const childNode = node.children.get(char);
		path += char;
		if (childNode.isEnd) {
			result.push(path); // If a word is found, add it to the result array
			childNode.isEnd = false; // Mark the word as found
		}

		board[x][y] = "#"; // Mark the cell as visited

		const directions = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		];

		for (const [dx, dy] of directions) {
			const newX = x + dx;
			const newY = y + dy;

			// Check if the new coordinates are within the board boundaries and the cell is not visited
			if (
				newX >= 0 &&
				newX < m &&
				newY >= 0 &&
				newY < n &&
				board[newX][newY] !== "#"
			) {
				dfs(childNode, newX, newY, path); // Continue DFS with the child node
			}
		}

		board[x][y] = char; // Restore the cell to its original state for backtracking
	};

	// Perform DFS starting from each cell on the board
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			dfs(trie, i, j, ""); // Start DFS from each cell with an empty path
		}
	}

	return result;
};
