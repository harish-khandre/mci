/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let i = 0,
    j = 1;
  let maxProfit = 0;

  while (j < prices.length) {
    let profit = prices[j] - prices[i];
    while (profit < 0) {
      i = j;
      profit = prices[j] - prices[i];
    }
    maxProfit = Math.max(profit, maxProfit);
    j += 1;
  }
  return maxProfit;
};
