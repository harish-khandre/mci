const getSum = (a, b) => {
  while (b !== 0) {
    const [xor, carry] = [a ^ b, (a & b) << 1];
    a = xor;
    b = carry;
  }
  return a;
};
