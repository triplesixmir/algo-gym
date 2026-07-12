/**
 * Is Subsequence
 * LeetCode #392
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function isSubsequence(s, t) {
  let left = 0, right = 0;

  while (left < s.length && right < t.length) {
    if (s[left] === t[right]) {
      left++;
    }

    right++;
  }

  return left === s.length;
}
