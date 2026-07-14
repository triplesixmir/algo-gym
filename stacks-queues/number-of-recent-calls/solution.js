/**
 * Number Of Recent Calls
 * LeetCode #933
 */
export class RecentCounter {
  constructor() {
    this.requests = [];
    this.head = 0;
  }

  /**
   * @param {number} t
   * @returns {number}
   */
  ping(t) {
    this.requests.push(t);

    while (this.requests[this.head] < t - 3000) {
      this.head++;
    }

    return this.requests.length - this.head;
  }
}
