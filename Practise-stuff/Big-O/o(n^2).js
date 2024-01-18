/* so when the two loop are operated in a function separately they are o(a + b) two loops a and b and when the loops are operated in a */
// function then they are o(a*b) that is

function compressBoxesTwice(boxes, boxes2) {
  // biome-ignore lint/complexity/noForEach: <explanation>
  boxes.forEach((boxes) => {
    console.log(boxes);
  });

  // biome-ignore lint/complexity/noForEach: <explanation>
  boxes2.forEach((boxes) => {
    console.log(boxes);
  });
}
/* In this function the loops are
separate and occurs O(a + b)
and this is O(n) */

// while

function compressBoxesTwice2(boxes, boxes2) {
  // biome-ignore lint/complexity/noForEach: <explanation>
  boxes.forEach((boxes) => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    boxes2.forEach((boxes) => {
      console.log(boxes);
    });
  });
}
/* as it is nested loops they
producte O(a*b) so its is O(n^2)
if there is 3 nested loops then
  the big O is O(n^3) */
