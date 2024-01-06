function dailyTemperatures(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    while (
      stack.length > 0 &&
      currentTemp > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      res[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return res;
}
