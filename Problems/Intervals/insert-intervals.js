const insert = (intervals, newInterval) => {
  const ans = [];
  const start = 0;
  const end = 1;
  let i = 0;
  while (i < intervals.length && newInterval[start] > intervals[i][end]) {
    ans.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && newInterval[end] >= intervals[i][start]) {
    newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
    newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
    i++;
  }
  ans.push(newInterval);
  while (i < intervals.length) {
    ans.push(intervals[i]);
    i++;
  }
  return ans;
};
