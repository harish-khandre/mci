const Twitter = function () {
  this.count = 0;
  this.tweetMap = {};
  this.followMap = {};
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweetMap[userId]) {
    this.tweetMap[userId] = [];
  }
  this.tweetMap[userId].push([this.count, tweetId]);
  this.count += 1;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const res = [];
  const heap = [];

  if (!this.followMap[userId]) {
    this.followMap[userId] = new Set();
  }

  this.followMap[userId].add(userId);

  const following = Array.from(this.followMap[userId]);

  for (const followeeId of following) {
    if (this.tweetMap[followeeId]) {
      const index = this.tweetMap[followeeId].length - 1;
      const [count, tweetId] = this.tweetMap[followeeId][index];
      add(heap, [count, tweetId, followeeId, index - 1]);
    }
  }

  while (heap.length > 0 && res.length < 10) {
    const [count, tweetId, followeeId, index] = remove(heap);
    res.push(tweetId);
    if (index >= 0) {
      const [count, tweetId] = this.tweetMap[followeeId][index];
      add(heap, [count, tweetId, followeeId, index - 1]);
    }
  }

  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followMap[followerId]) {
    this.followMap[followerId] = new Set();
  }
  this.followMap[followerId].add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.followMap[followerId]) {
    return;
  }
  this.followMap[followerId].delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

function add(heap, val) {
  heap.push(val);
  heapifyUp(heap, heap.length - 1);
}

function remove(heap) {
  const val = heap[0];
  const last = heap.pop();
  if (heap.length > 0) {
    heap[0] = last;
    heapifyDown(heap, 0);
  }
  return val;
}

function heapifyDown(heap, i) {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let biggest = left;
  if (left >= heap.length) return;
  if (right < heap.length && heap[right][0] > heap[left][0]) {
    biggest = right;
  }

  if (heap[biggest][0] > heap[i][0]) {
    [heap[biggest], heap[i]] = [heap[i], heap[biggest]];
    heapifyDown(heap, biggest);
  }
}

function heapifyUp(heap, i) {
  if (i === 0) return;

  const p = Math.floor((i - 1) / 2);
  if (heap[p][0] < heap[i][0]) {
    [heap[p], heap[i]] = [heap[i], heap[p]];
    heapifyUp(heap, p);
  }
}
