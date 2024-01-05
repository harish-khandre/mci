/* You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9 */

const evalRPN = (tokends) => {
  const stack = [];
  for (const c of tokens) {
    if (c === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (c === "-") {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b - a);
    } else if (c === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (c === "/") {
      const a = stack.pop();
      const b = stack.pop();
      if (a === 0) {
        throw new Error("Division by zero");
      }
      stack.push(parseInt(b / a));
    } else {
      stack.push(parseInt(c));
    }
  }
  return stack[0];
};
