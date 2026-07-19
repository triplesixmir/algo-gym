/**
 * Minimum Recolors To Get K Consecutive Black Blocks
 * LeetCode #2379
 *
 * @param {string} blocks
 * @param {number} k
 * @returns {number}
 */
export function minimumRecolors(blocks, k) {
  let n = blocks.length;
  let w = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') w++;
  }

  let ans = w;

  for (let i = k; i < n; i++) {
    if (blocks[i] === 'W') w++;
    if (blocks[i - k] === 'W') w--;
    ans = Math.min(ans, w);
  }

  return ans;
}
