function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!map1[charS]) {
      map1[charS] = charT;
    } else if (map1[charS] !== charT) {
      return false;
    }

    if (!map2[charT]) {
      map2[charT] = charS;
    } else if (map2[charT] !== charS) {
      return false;
    }
  }

  return true;
}
