/**
 * Length Of Last Word
 * LeetCode #58
 *
 * @param {string} s
 * @returns {number}
 */
export function lengthOfLastWord(s) {
  const arr = s.trim().split(/\s+/);

  const lastWord = arr[arr.length - 1];

  return lastWord.length;
}
