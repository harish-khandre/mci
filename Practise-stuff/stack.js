// stack implementation with Linked list

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  peek() {
    return this.head;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const holdingPointer = this.head;
      this.head = newNode;
      this.head.prev = holdingPointer;
      // prev because stack is LIFO
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      this.tail = null;
    }
    // const holdingPointer = this.head;
    this.head = this.head.prev;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("google2"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());

// Stack implementation with array

class arrayStack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack2 = new arrayStack();
myStack.peek();
myStack.push("google");
myStack.push("ztm");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
