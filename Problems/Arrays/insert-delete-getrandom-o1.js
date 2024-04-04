class RandomizedSet {
  constructor() {
    this.list = []; // Array to store elements
    this.map = new Map(); // Map to store element-value pairs
  }

  search(val) {
    return this.map.has(val);
  }

  insert(val) {
    if (this.search(val)) return false;

    this.list.push(val); // Add the value to the end of the array
    this.map.set(val, this.list.length - 1); // Map the value to its index in the array
    return true;
  }

  remove(val) {
    if (!this.search(val)) return false; // If the value doesn't exist, return false

    const index = this.map.get(val); // Get the index of the value
    const lastElement = this.list[this.list.length - 1]; // Get the last element of the array

    // Update the index of the lastElement in the map
    this.map.set(lastElement, index);

    // Swap the element to be removed with the last element
    this.list[index] = lastElement;

    // Remove the last element from the list and map
    this.list.pop();
    this.map.delete(val);

    return true;
  }

  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length); // Generate a random index
    return this.list[randomIndex]; // Return the element at the random index
  }
}
