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
