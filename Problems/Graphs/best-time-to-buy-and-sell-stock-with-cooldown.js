const maxProfit = (prices) => {
  // If the prices array has length 0 or 1, there is no opportunity to buy and sell
  if (prices.length <= 1) return 0;

  // Initialize variables
  let buy = -prices[0]; // Maximum profit if we buy a stock on the current day
  let sell = 0; // Maximum profit if we sell a stock on the current day
  let prevSell = 0; // Maximum profit if we sell a stock on the previous day

  for (let i = 1; i < prices.length; i++) {
    // Store the current sell value before updating it
    let temp = sell;

    // Update the sell value
    // We can either keep the previous sell value or buy a stock on the previous day and sell it today
    sell = Math.max(sell, buy + prices[i]);

    // Update the buy value
    // We can either keep the previous buy value or sell the stock on the previous day and buy it today
    // Note: We cannot buy a stock today if we sold it yesterday (cooldown)
    buy = Math.max(buy, prevSell - prices[i]);

    // Update the prevSell value with the previous sell value before updating sell
    prevSell = temp;
  }

  // Return the maximum profit that can be achieved
  return sell;
};

// another solution

const _maxProfit = (prices) => {
  if (prices.length <= 1) return 0;

  const memo = new Map();
  return dp(prices, 0, 0, 0, memo);
};

const dp = (prices, i, buy, sell, memo) => {
  const key = `${i},${buy},${sell}`;
  if (memo.has(key)) return memo.get(key);

  if (i >= prices.length) return 0;

  let profit = 0;
  if (buy === 0) {
    // No stock, no profit
    profit = Math.max(profit, dp(prices, i + 1, 0, 0, memo));
    // Buy stock
    profit = Math.max(profit, -prices[i] + dp(prices, i + 1, 1, 0, memo));
  } else if (buy === 1) {
    // Keep stock
    profit = Math.max(profit, dp(prices, i + 1, 1, sell, memo));
    // Sell stock
    profit = Math.max(profit, prices[i] + dp(prices, i + 1, 0, sell + 1, memo));
  } else {
    // Cooldown day after selling
    profit = Math.max(profit, dp(prices, i + 1, 0, 0, memo));
  }

  memo.set(key, profit);
  return profit;
};
