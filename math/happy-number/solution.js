/**
 * Happy Number
 * LeetCode #202
 *
 * @param {number} n
 * @returns {boolean}
 */
export function isHappy(n) {
  const seen = new Set();

  function recursion(n) {
    const arr = n.toString().split("").map(x => Number(x));
    let sum = 0;

    for (const num of arr) {
      sum += num * num;
    }

    if (sum === 1) return true;
    if (seen.has(sum)) return false;
    seen.add(sum);

    return recursion(sum);
  }

  return recursion(n);
}
