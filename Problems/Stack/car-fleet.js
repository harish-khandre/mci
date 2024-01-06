const carFleet = (target, position, speed) => {
  const n = position.length;
  const inds = [];
  for (let i = 0; i < n; i++) inds.push(i);

  inds.sort((a, b) => position[b] - position[a]);

  let cur = inds[0];
  let result = 1;

  for (let i = 1; i < n; i++) {
    const idx = inds[i];
    if (
      (target - position[idx]) * speed[cur] >
      (target - position[cur]) * speed[idx]
    ) {
      result++;
      cur = idx;
    }
  }

  return result;
};
