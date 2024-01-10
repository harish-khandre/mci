const rightSideView = (root) => {
  if (root === null) return [];

  const res = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const levelArr = [];

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      levelArr.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    res.push(levelArr[levelArr.length - 1]);
  }
  return res;
};
