const MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  if (!this.stack.length) {
    this.stack.push(val);
    this.minStack.push(val);
  } else {
    this.stack.push(val);
    const min = Math.min(this.minStack[this.minStack.length - 1], val);
    this.minStack.push(min);
  }
};

MinStack.prototype.pop = function () {
  if (!this.stack.length) return null;
  this.minStack.pop();
  return this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
