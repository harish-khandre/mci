// Function to merge triplets and check if they match the target
const mergeTriplets = (triplets, target) => {
  // Initialize flags for each dimension
  let foundX = false,
    foundY = false,
    foundZ = false;

  // Iterate through each triplet
  for (let triplet of triplets) {
    // Check if all dimensions are already found
    if (foundX && foundY && foundZ) break;

    // Check if the current triplet is a potential match
    if (
      triplet[0] <= target[0] && // Check if dimension X of the triplet is less than or equal to target
      triplet[1] <= target[1] && // Check if dimension Y of the triplet is less than or equal to target
      triplet[2] <= target[2] // Check if dimension Z of the triplet is less than or equal to target
    ) {
      // Update flags for each dimension if a match is found
      if (triplet[0] === target[0]) foundX = true; // If dimension X matches the target, set foundX to true
      if (triplet[1] === target[1]) foundY = true; // If dimension Y matches the target, set foundY to true
      if (triplet[2] === target[2]) foundZ = true; // If dimension Z matches the target, set foundZ to true
    }
  }

  // Check if all dimensions are found
  return foundX && foundY && foundZ;
};
