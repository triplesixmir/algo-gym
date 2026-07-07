/**
 * Merge Strings Alternately
 * LeetCode #1768
 *
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 */
export function mergeAlternately(word1, word2) {
  let merged = '';

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      merged += word1[i];
    }

    if (i < word2.length) {
      merged += word2[i];
    }
  }

  return merged;
}
