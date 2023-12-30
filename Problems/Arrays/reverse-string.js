function reverseString(param) {
  const newString = [];

  const lastChar = param.length - 1;

  for (let index = lastChar; index >= 0; index--) {
    newString.push(param[index]);
  }

  console.log(newString);
  return newString.join("");
}

// simplier way to do it is :

function reverse(string) {
  return string.split("").reverse().join("");
}

// even better version of it
const reverseStr = (str) => {
  return string.split("").reverse().join("");
};
