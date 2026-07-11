/**
 * Can Place Flowers
 * LeetCode #605
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @returns {boolean}
 */
export function canPlaceFlowers(flowerbed, n) {
  let k = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let left = flowerbed[i - 1] !== undefined ? flowerbed[i - 1] : 0;
    let right = flowerbed[i + 1] !== undefined ? flowerbed[i + 1] : 0;

    if (left === 0 && flowerbed[i] === 0 && right === 0) {
      flowerbed[i] = 1;
      k++;
    }
  }

  return k >= n;
}
