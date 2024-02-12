class ArrayList {
  constructor(initialCapacity = 10) {
    this.data = new Array(initialCapacity);
    this.size = 0;
  }

  // Adds an element to the end of the list
  add(element) {
    // Check if resize is needed
    if (this.size === this.data.length) {
      this.resize(this.data.length * 2); // Double capacity when full
    }
    this.data[this.size++] = element;
  }

  // Removes and returns the element at the specified index
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    const removedElement = this.data[index];
    // Shift elements to the left to close the gap
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    // Check if shrink is needed (optional optimization)
    if (this.size <= this.data.length / 4) {
      // Shrink when below 25% capacity
      this.resize(Math.floor(this.data.length / 2));
    }
    return removedElement;
  }

  // Returns the element at the specified index
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    return this.data[index];
  }

  // Sets the element at the specified index
  set(index, element) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    this.data[index] = element;
  }

  // Returns the list's size
  size() {
    return this.size;
  }

  // Checks if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Clears the list
  clear() {
    this.data = new Array(10); // Reset to initial capacity
    this.size = 0;
  }

  // Resizes the internal array to the specified capacity
  resize(newCapacity) {
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

  // Optional advanced features:
  // - Iterators (using Symbol.iterator)
  // - Custom element type checks
}

// Usage example
const myList = new ArrayList();
myList.add(10);
myList.add(20);
myList.add(30);
console.log(myList.get(1)); // Output: 20
myList.remove(0); // Removes 10
console.log(myList.size()); // Output: 2
