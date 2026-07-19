/**
 * Construct The Rectangle
 * LeetCode #492
 *
 * @param {number} area
 * @returns {number[]}
 */
export function constructRectangle(area) {
  for (let i = Math.floor(Math.sqrt(area)); i > 0; i--) {
    if (area % i === 0) return [area / i, i];
  }
}
