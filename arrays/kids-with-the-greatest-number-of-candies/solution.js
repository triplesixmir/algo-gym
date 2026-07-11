/**
 * Kids With The Greatest Number Of Candies
 * LeetCode #1431
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
export function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);

  const result = candies.map((kid) => {
    return kid + extraCandies >= max;
  });

  return result;
}
