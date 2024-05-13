const romanMap = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

const intToRoman = (num) => {
  let res = "";
  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      res += symbol;
      num -= value;
    }
    if (num === 0) break;
  }
  return res;
};
