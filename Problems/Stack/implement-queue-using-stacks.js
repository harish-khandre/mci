class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }
  push(val) {
    this.pushStack.push(val);
  }
  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }
  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}

// functional way of doing this

const Queue = function () {
  this.stack = [];
};

Queue.prototype.push = function (x) {
  this.stack.unshift(x);
};

Queue.prototype.pop = function () {
  return this.stack.pop();
};

Queue.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

Queue.prototype.empty = function () {
  return this.stack === 0;
};
