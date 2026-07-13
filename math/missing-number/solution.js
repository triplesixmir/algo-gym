/**
 * Missing Number
 * Solvit
 *
 * @param {number[]} nums
 * @returns {number}
 */
export function missingNumber(nums) {
  const n = nums.length;
  const expected = (n * (n + 1)) / 2;
  const real = nums.reduce((acc, num) => acc + num, 0);

  return expected - real;
}
