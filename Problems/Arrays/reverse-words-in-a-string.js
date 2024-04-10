var reverseWords = function (s) {
  const rw = s.trim().replace(/\s+/g, " ").split(" ").reverse();
  return rw.join(" ");
};
