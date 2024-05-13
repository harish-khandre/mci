const canConstruct = (ransomNote, magazine) => {
  let result;
  let Arr = [...magazine];
  for (let index = 0; index < ransomNote.length; index++) {
    const element = ransomNote[index];
    if (Arr.includes(element)) {
      Arr.splice(Arr.indexOf(element), 1);
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};
