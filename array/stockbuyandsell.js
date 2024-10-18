// Stock Buy and Sell – Max one Transaction Allowed

// Input: prices[] = {7, 10, 1, 3, 6, 9, 2}
// Output: 8
// Explanation: Buy for price 1 and sell for price 9. 


// Input: prices[] = {7, 6, 4, 3, 1} 
// Output: 0
// Explanation: Since the array is sorted in decreasing order, 0 profit can be made without making any transaction.

// Input: prices[] = {1, 3, 6, 9, 11} 
// Output: 10
// Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and selling at price[n-1]


// const price = [7, 10, 1, 3, 6, 9, 2]
// const price = [7, 6, 4, 3, 1]

const price = [1, 3, 6, 9, 11]
const stockBuyandSell =(price)=>{

    const max = Math.max(...price);
    const min = Math.min(...price);
    
    if(price[0] == max){
        return 0;
    }


    
    return max - min;
}

console.log(stockBuyandSell(price))