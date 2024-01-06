const multiplyWithLoop = (arr) => {
  let product = 1;
  for (let index = 0; index < arr.length; index++) {
    product *= arr[index];
  }
  return product;
};
console.log(multiplyWithLoop([1, 2, 3, 4]));
