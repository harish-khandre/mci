function findFactorialRecursive(number) {
  if (number <= 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}
