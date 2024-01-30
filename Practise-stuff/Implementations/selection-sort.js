function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    const temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
