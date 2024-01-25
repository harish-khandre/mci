/*
    time:   O(V+E) V is number of courses (vertices) and E number of prerequisites (edges) 
    space:  O(V+E) storing recurssion stack 
  */
const findOrder = (numCourses, prerequisites) => {
  const graph = new Map();
  const visited = new Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited
  const stack = []; // Stack to store the course order

  // Building the graph
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq).push(course);
  }

  function dfs(course) {
    if (visited[course] === 1) return false; // Detected a cycle
    if (visited[course] === 2) return true; // Already processed this node

    visited[course] = 1; // Mark as visiting
    if (graph.has(course)) {
      for (const prereq of graph.get(course)) {
        if (!dfs(prereq)) return false; // Cycle detected in a prerequisite
      }
    }

    visited[course] = 2; // Mark as visited
    stack.push(course); // Add to the course order
    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return []; // If a cycle is detected, return an empty array
  }

  return stack.reverse(); // Reverse to get the correct order
};
