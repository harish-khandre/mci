/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container */

const maxArea = (height) => {
  let [left, right, maxArea] = [0, height.length - 1, 0];

  while (left < right) {
    let containerHeight;
    // biome-ignore lint/style/useConst: <explanation>
    let currentArea;
    const containerWidth = right - left;

    if (height[left] < height[right]) {
      containerHeight = height[left];
      left++;
    } else {
      containerHeight = height[right];
      right--;
    }

    currentArea = containerWidth * containerHeight;

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
  }

  return maxArea;
};
