// Checks if there are unvisited vertices with finite distances
function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

// Finds the index of the lowest unvisited vertex based on distances
function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) {
      continue;
    }

    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }

  return idx;
}

// Dijkstra's algorithm for weighted graphs represented as an adjacency list
export default function dijkstraList(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList,
): number[] {
  // Initialize arrays to track visited vertices, previous vertices, and distances
  const seen = new Array(arr.length).fill(false);
  const prev = new Array(arr.length).fill(-1);
  const dists = new Array(arr.length).fill(Infinity);

  // Distance from the source to itself is 0
  dists[source] = 0;

  // Continue until all vertices are visited
  while (hasUnvisited(seen, dists)) {
    // Find the index of the lowest unvisited vertex
    const curr = getLowestUnvisited(seen, dists);

    // Mark the current vertex as visited
    seen[curr] = true;

    // Iterate through adjacent vertices of the current vertex
    for (const edge of arr[curr]) {
      // Skip if the adjacent vertex is already visited
      if (seen[edge.to]) {
        continue;
      }

      // Calculate the new distance to the adjacent vertex
      const newDist = dists[curr] + edge.weight;

      // Update the distance and previous vertex if a shorter path is found
      if (newDist < dists[edge.to]) {
        dists[edge.to] = newDist;
        prev[edge.to] = curr;
      }
    }
  }

  // Returning the calculated distances array or any other result you need
  return dists;
}
