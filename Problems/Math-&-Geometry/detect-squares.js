class DetectSquares {
  constructor() {
    // Initialize a map to store points on the x-axis
    this.xp = new Map(); // points on x = key
    // Initialize a map to store counts of points
    this.p = new Map(); // points count
  }

  // Function to generate a unique key for a given point (x, y)
  getCntKey(x, y) {
    return x * 10000 + y; // Using a formula to create a unique key
  }

  // Function to add a point to the collection
  add(p) {
    const [x, y] = p; // Destructure the point to get x and y coordinates
    const arr = this.xp.get(x);

    // If there's no array for this x coordinate, create one and add y to it
    if (!arr) {
      this.xp.set(x, [y]);
    } else {
      arr.push(y); // If the array already exists, add y to it
    }

    // Increment the count for the given point
    const key = this.getCntKey(x, y);
    this.p.set(key, (this.p.get(key) || 0) + 1);
  }

  // Function to count the number of squares formed by a given point
  count(point) {
    const [x1, y1] = point; // Destructure the given point to get x and y coordinates
    let res = 0; // Initialize the result counter

    // Iterate through y coordinates for the given x coordinate
    for (let y2 of this.xp.get(x1) ?? []) {
      if (y2 === y1) {
        continue; // Skip if y2 is equal to y1 (same point)
      }

      // Calculate the side length of the potential square
      let sideLen = Math.abs(y2 - y1);

      // Calculate coordinates for the other two points to form a potential square
      let x3 = x1 - sideLen,
        y3 = y2;
      let x4 = x1 - sideLen,
        y4 = y1;
      // Add the count of potential squares formed by these two points
      res += this.getCntOrZ(x3, y3) * this.getCntOrZ(x4, y4);

      // Calculate coordinates for the other two points to form a potential square
      x3 = x1 + sideLen;
      x4 = x1 + sideLen;
      // Add the count of potential squares formed by these two points
      res += this.getCntOrZ(x3, y3) * this.getCntOrZ(x4, y4);
    }

    return res; // Return the total count of squares formed
  }

  // Function to get the count fo
}
