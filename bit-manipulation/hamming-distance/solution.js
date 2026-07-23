/**
 * Hamming Distance
 * LeetCode #461
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export function hammingDistance(x, y) {
  const diff = (x ^ y).toString(2).split("");

  let count = 0;
  for (let i = 0; i < diff.length; i++) {
    if (diff[i] === '1') count++;
  }

  return count;
}
