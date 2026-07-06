/**
 * Sqrt X
 * LeetCode #69
 *
 * @param {number} x
 * @returns {number}
 */
export function mySqrt(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else if (square > x) {
      right = mid - 1;
    }
  }

  return right;
}
