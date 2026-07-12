/**
 * Find The Highest Altitude
 * LeetCode #1732
 *
 * @param {number[]} gain
 * @returns {number}
 */
export function largestAltitude(gain) {
  let alt = 0, max = 0;

  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];

    if (alt > max) max = alt;
  }

  return max;
}
