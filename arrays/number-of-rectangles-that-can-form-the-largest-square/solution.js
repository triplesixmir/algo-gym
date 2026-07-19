/**
 * Number Of Rectangles That Can Form The Largest Square
 * LeetCode #1725
 *
 * @param {number[][]} rectangles
 * @returns {number}
 */
export function countGoodRectangles(rectangles) {
  let maxLen = null;
  const map = new Map();

  for (let i = 0; i < rectangles.length; i++) {
    const len = Math.min(rectangles[i][0], rectangles[i][1]);

    if (!maxLen) maxLen = len;
    if (maxLen && len > maxLen) maxLen = len;

    map.set(len, (map.get(len) || 0) + 1);
  }

  return map.get(maxLen);
}
