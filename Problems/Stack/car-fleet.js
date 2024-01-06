const carFleet = (target, position, speed) => {
  const timeArr = new Array(target).fill(0);
  for (let i = 0; i < position.length; i++) {
    timeArr[position[i]] = (target - position[i]) / speed[i];
  }
  let fleets = 0;
  let prevTime = 0;
  for (let i = timeArr.length - 1; i >= 0; i--) {
    if (timeArr[i] > prevTime) {
      fleets++;
      prevTime = timeArr[i];
    }
  }
  return fleets;
};
