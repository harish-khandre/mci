const findItinerary = (tickets) => {
  // Build the graph from the given tickets
  const graph = buildGraph(tickets);
  // Initialize an array to store the itinerary
  const itinerary = [];

  // Perform depth-first search starting from 'JFK'
  dfs(graph, "JFK", itinerary);

  // Return the reversed itinerary (since DFS appends airports in reverse order)
  return itinerary.reverse();
};

// Depth-first search function
const dfs = (graph, city, itinerary) => {
  // Get the destinations from the graph for the current city
  const queue = graph.get(city) || [];

  // Process each destination
  while (queue.length) {
    // Take the next destination from the queue
    const nextCity = queue.shift();
    // Perform DFS recursively for the next destination
    dfs(graph, nextCity, itinerary);
  }

  // Add the current city to the itinerary
  itinerary.push(city);
};

// Function to build the graph from the given list of tickets
const buildGraph = (tickets) => {
  // Initialize an empty Map to represent the graph
  const graph = new Map();

  // Iterate through each ticket
  for (const [src, dst] of tickets) {
    // If the source city is not in the graph, add it with an empty array
    if (!graph.has(src)) {
      graph.set(src, []);
    }
    // Add the destination to the list of destinations for the source city
    graph.get(src).push(dst);
  }

  // Sort the destinations in lexical order for each city
  for (const destinations of graph.values()) {
    destinations.sort();
  }

  // Return the built graph
  return graph;
};
