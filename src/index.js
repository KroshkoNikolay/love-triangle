/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  if (preferences.length < 3) {
    return 0;
  }
  let count = 0;
  const trianglers = [];
  for (let i = 0; i < preferences.length; i++) {
    if (trianglers.length > 0 && trianglers.indexOf(i) > -1) {
      continue;
    }
    const l1 = i;
    const l2 = preferences[l1] - 1;
    const l3 = preferences[l2] - 1;
    if (preferences[l3] === l1 + 1 && preferences[l3] !== l2 + 1) {
      count += 1;
      trianglers.push(l1);
      trianglers.push(l2);
      trianglers.push(l3);
    }
  }
  return count;
  // your implementation
};
