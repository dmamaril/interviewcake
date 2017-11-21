/**
 * https://www.interviewcake.com/question/javascript/stock-price
 *
 * Opening time 9:30AM local time
 * Index of stock price is minutes past opening time
 *
 * Write an efficient function that takes stockPricesYesterday
 * and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 *
 * No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass). 
 */

// you could iterate once and track min max and diffs;
// if you find a new min, delete max & find new max;
// O(n) time & 0(1) space
const getMaxProfit = (stockPricesYesterday, expectedResult) => {

    console.log();
    console.log(stockPricesYesterday, expectedResult);

    // safety checks
    if (!Array.isArray(stockPricesYesterday) || stockPricesYesterday.length === 0) {
        console.error(`Expected input to be non-empty array. Instead received ${stockPricesYesterday}`);
        return 0;
    }

    let min, diff = 0;

    for (let price of stockPricesYesterday) {

        if (typeof price !== 'number') {
            console.error(`Expected price to be of type Number. Instead received ${price}`);
            return 0;
        }

        min  = Math.min(min || price, price);
        diff = Math.max(price - min, diff);
    }

    console.log(`Max Profit: ${diff}`);
    return diff;
};

getMaxProfit([10, 7, 5, 8, 11, 9], 6); // random
getMaxProfit([1, 1, 1, 1, 1, 1], 0); // no progress
getMaxProfit([1, 2, 3, 4, 5, 6], 5); // asc
getMaxProfit([6, 5, 4, 3, 2, 1], 0); // desc
getMaxProfit('1,2,3,4,5,6', 0); // string
getMaxProfit(['1', 2, 3, 4, 5, 6], 0) // bad types