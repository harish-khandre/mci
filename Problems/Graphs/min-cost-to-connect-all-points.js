/**
 * @param {number[][]} points
 * @return {number}
 */
/*
 
Kruskal's algorithm:
  - We first create all possible edges([distance, x, y]) between the points and calculate
   the Manhattan distance for each edge, then sort these edges based on their distances.
  - For each edge in edges, use union find to calculate the cost. If you can union, then
    cost += distance.

Prim's algorithm:
  - without sorting anything, we wanna build our graph greedily.
  - set the variables:
    distance array that will hold the min distance to the next node,
     first item is 0 since it's distance to itself is 0
    cost, and next node(0)
  - for each node in points we wanna find the closest next node:
    have min and currNode variables.
    for each node other than current:
      if distance[i] > 0:
        calculate the distance[i] by min(distance[i] or manhattan distance between i and next)
      if (distance[i] < min):
        then update min and currentNode to i
    after finding the closest node to our next node, update cost += min
      update the distance[currNode] = 0 so we don't process it again and set
        next = currNode.
*/

// Function to calculate the minimum cost to connect points
const minCostConnectPoints = (points) => {
  // Number of points
  const n = points.length;

  // Array to store distances, initialized with Infinity
  const dist = Array(n).fill(Infinity);

  // Starting point has zero cost
  dist[0] = 0;

  // Initialize total cost
  let cost = 0;

  // Initialize index of the next point to visit
  let next = 0;

  // Loop through each step to connect points
  for (let step = 1; step < n; step++) {
    // Initialize minimum distance and current node
    let min = Infinity;
    let currNode = -1;

    // Loop through each point
    for (let i = 1; i < n; i++) {
      // Check if point is not visited yet
      if (dist[i] > 0) {
        // Calculate distance between current point and next point
        dist[i] = Math.min(
          dist[i],
          Math.abs(points[i][0] - points[next][0]) +
            Math.abs(points[i][1] - points[next][1]),
        );
        // Check if this distance is smaller than the current minimum
        if (dist[i] < min) {
          // Update minimum distance and current node
          min = dist[i];
          currNode = i;
        }
      }
    }
    // Add minimum distance to total cost
    cost += min;

    // Mark the current node as visited
    dist[currNode] = 0;

    // Update the index of the next point to visit
    next = currNode;
  }

  // Return the total cost
  return cost;
};
