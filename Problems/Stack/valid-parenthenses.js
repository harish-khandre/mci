const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const prevVal = stack.pop();

      if (prevVal === "(" && char !== ")") return false;
      if (prevVal === "[" && char !== "]") return false;
      if (prevVal === "{" && char !== "}") return false;
      if (prevVal === undefined) return false;
    }
  }
  return stack.length === 0;
};
