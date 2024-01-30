// Class definition for a TimeMap
class TimeMap {
  // Constructor initializes an empty map
  constructor() {
    this.map = {};
  }

  // Method to set a key-value pair with a timestamp
  set(key, value, timestamp) {
    // Ensure that the key exists in the map, or create an empty array for it
    this.map[key] = this.map[key] || [];

    // Add the new value and timestamp to the key's array in the map
    this.map[key].push({ value, timestamp });
  }

  // Method to get the value of a key at a specific timestamp
  get(key, timestamp) {
    // Initialize an empty result variable
    let res = "";

    // Retrieve the array of values for the given key, or use an empty array if not found
    const values = this.map[key] || [];

    // Initialize pointers for binary search
    let [l, r] = [0, values.length - 1];

    // Perform binary search to find the closest timestamp value
    while (l <= r) {
      // Calculate the middle index
      const mid = Math.floor((l + r) / 2);

      // Check if the timestamp at the middle is less than or equal to the target timestamp
      if (values[mid].timestamp <= timestamp) {
        // Update the result and move the left pointer to search in the right half
        res = values[mid].value;
        l = mid + 1;
      } else {
        // Move the right pointer to search in the left half
        r = mid - 1;
      }
    }

    // Return the closest value found during the binary search
    return res;
  }
}
