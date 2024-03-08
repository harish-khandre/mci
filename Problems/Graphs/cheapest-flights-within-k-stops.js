/**
 * @param {number} n - Number of cities
 * @param {number[][]} flights - Flights information: [from, to, price]
 * @param {number} src - Source city
 * @param {number} dst - Destination city
 * @param {number} k - Maximum number of stops allowed
 * @return {number} - Cheapest price from src to dst with at most k stops
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const INF = Number.MAX_SAFE_INTEGER;
  const dist = new Array(n).fill(INF); // Initialize an array to store the shortest distances
  dist[src] = 0; // Set the distance from source to itself as 0 (initializing the source)

  // Iterate k+1 times to ensure all possible paths with at most k stops are considered
  for (let i = 0; i <= k; i++) {
    const newDist = [...dist]; // Create a copy of the current distances

    // Relax edges by considering each flight
    for (const [from, to, price] of flights) {
      // If the distance to 'from' city is not INF and a better path through 'from' is found to 'to' city
      if (dist[from] !== INF && dist[from] + price < newDist[to]) {
        newDist[to] = dist[from] + price; // Update the shortest distance to 'to' city
      }
    }

    // Update the distances after considering paths with at most i stops
    dist.splice(0, dist.length, ...newDist);
  }

  // Return the shortest distance to the destination city or -1 if no path exists
  return dist[dst] === INF ? -1 : dist[dst];
};
