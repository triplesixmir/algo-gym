/**
 * Unique Number Of Occurrences
 * LeetCode #1207
 *
 * @param {number[]} arr
 * @returns {boolean}
 */
export function uniqueOccurrences(arr) {
  const freq = new Map();

  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const val = new Set(freq.values());
  return freq.size === val.size;
}
