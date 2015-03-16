/*

Writing coding interview questions hasn't made me rich. Maybe trading Apple stocks will.

I have an array stock_prices_yesterday where:

The indices are the time, as a number of minutes past trade opening time, which was 9:30am local time.
The values are the price of Apple stock at that time, in dollars.
For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.

Write an efficient algorithm for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday. For this problem, we won't allow "shorting"—you must buy before you sell.

*/

var stockPricesYesterday = [500, 510, 530, 450, 470, 560];

var findMaxProfit = function(prices) {
    // set minPrice as first price
    var minPrice = prices[0];
    // set maxProfit as 0
    var maxProfit = 0;
    var i;
    
    // loop through prices
    for (i = 1; i < prices.length; i++) {
        // min of minPrice and current price
        minPrice = Math.min(minPrice, prices[i])
        
        // max of maxProfit and minPrice - current price  
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    } 
    
    return maxProfit;
}

findMaxProfit(stockPricesYesterday);