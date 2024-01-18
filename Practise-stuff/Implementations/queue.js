// how queue works under the hood

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  peek() {
    return this.head; // or this.head?.value
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.peek();
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
