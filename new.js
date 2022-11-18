function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [
  0,
  1,
  2,
  [3, 4],
  true,
  "vasanth",
  undefined,
  null,
  [5, 6, [7, 8, [9, 10]]],
];
const flattened = [...flatten(arr, Infinity)];