/**
 * WordDictionary is a class representing a trie-based data structure for storing and searching words.
 * Words can be added to the dictionary using the addWord method, and the search method can be used
 * to check whether a given word or a word with wildcard character '.' is present in the dictionary.
 *
 * Usage:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class TrieNode {
	/**
	 * TrieNode represents a node in the trie structure, containing children nodes and information
	 * about whether the current node completes a valid word.
	 */
	constructor() {
		this.children = {}; // Map of characters to child nodes
		this.isWord = false; // Flag indicating if the current node completes a word
	}
}

class WordDictionary {
	/**
	 * WordDictionary is the main class for storing and searching words in a trie structure.
	 */
	constructor() {
		this.root = new TrieNode(); // The root node of the trie
	}

	/**
	 * Adds a word to the WordDictionary.
	 * Time Complexity: O(N), where N is the length of the word
	 * Space Complexity: O(N)
	 */
	addWord(word, node = this.root) {
		for (const char of word) {
			const child = node.children[char] || new TrieNode();

			node.children[char] = child;

			node = child;
		}

		node.isWord = true;
	}

	/**
	 * Searches for a word in the WordDictionary.
	 * Supports wildcard character '.' which can match any character.
	 * Time Complexity: O(N), where N is the length of the word
	 * Space Complexity: O(N)
	 */
	search(word) {
		return this.dfs(word, this.root, 0);
	}

	/**
	 * Depth-first search (DFS) helper function for searching words in the trie.
	 */
	dfs(word, node, level) {
		if (!node) return false;

		const isWord = level === word.length;
		if (isWord) return node.isWord;

		const isWildCard = word[level] === ".";
		if (isWildCard) return this.hasWildCard(word, node, level);

		return this.dfs(word, node.children[word[level]], level + 1);
	}

	/**
	 * Helper function to handle wildcard character '.' during search.
	 */
	hasWildCard(word, node, level) {
		for (const char of Object.keys(node.children)) {
			const child = node.children[char];

			const hasWord = this.dfs(word, child, level + 1);
			if (hasWord) return true;
		}

		return false;
	}
}
