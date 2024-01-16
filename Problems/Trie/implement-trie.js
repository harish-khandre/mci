// Trie class definition
class Trie {
	// Constructor initializes the Trie with an empty root object
	constructor() {
		this.root = {};
	}

	/**
	 * Inserts a word into the Trie.
	 */
	insert(word) {
		let curr = this.root;

		// Traverse through each character in the word
		for (const char of word) {
			// If the character is not present in the current node, create an empty object for it
			if (!curr[char]) {
				curr[char] = {};
			}
			// Move to the next node in the Trie
			curr = curr[char];
		}

		// Mark the end of the word in the Trie
		curr.isWord = true;
	}

	/**
	 * Searches for a word in the Trie.
	 */
	search(word) {
		let curr = this.root;

		// Traverse through each character in the word
		for (const char of word) {
			// If the character is not present in the current node, the word is not in the Trie
			if (!curr[char]) {
				return false;
			}
			// Move to the next node in the Trie
			curr = curr[char];
		}

		// Check if the word is marked as a complete word in the Trie
		return curr.isWord !== undefined;
	}

	/**
	 * Checks if there is any word in the Trie that starts with a given prefix.
	 */
	startsWith(prefix) {
		let curr = this.root;

		// Traverse through each character in the prefix
		for (const char of prefix) {
			// If the character is not present in the current node, no word starts with the given prefix
			if (!curr[char]) {
				return false;
			}
			// Move to the next node in the Trie
			curr = curr[char];
		}

		// At this point, the Trie contains at least one word with the given prefix
		return true;
	}
}
