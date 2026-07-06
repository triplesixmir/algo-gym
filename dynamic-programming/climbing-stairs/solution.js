/**
 * Climbing Stairs
 * LeetCode #70
 *
 * @param {number} n
 * @returns {number}
 */
export function climbStairs(n) {
  if (n <= 3) return n;

  let prev1 = 3;
  let prev2 = 2;
  let current = 0;

  for (let i = 3; i < n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}
