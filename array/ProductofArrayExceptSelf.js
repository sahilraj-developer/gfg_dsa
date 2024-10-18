// Input: arr[] = {10, 3, 5, 6, 2}
// Output: prod[] = {180, 600, 360, 300, 900}
// Explanation :
// Product of all except 10 = 3 * 5 * 6 * 2 = 180
// Product of all except 3 = 10 * 5 * 6 * 2 = 600
// Similarly for remaining elements, we have 
// 10 * 3 * 6 * 2 = 360, 
// 10 * 3 * 5 * 2 = 300 
// 10 * 3 * 6 * 5 = 900

// Input: arr[] = {1, 2, 3, 4, 5}
// Output: prod[] = {120, 60, 40, 30, 24 }
// Explanation : 
// 2 * 3 * 4 * 5 = 120, 
// 1 * 3 * 4 * 5 = 60
// 1 * 2 * 4 * 5 = 40
// 1 * 2 * 3 * 5 = 30
// 1 * 2 * 3 * 4 = 24

const array = [10, 3, 5, 6, 2];

const ProductFunction =(data)=>{
    const prod =[];
    let mul=1;
    for (let i = 0; i < data?.length; i++) {
        mul=1
        for (let j = 0; j < data?.length; j++) {
            if (i !== j) {
                mul *= data[j];
            }
        }
        prod.push(mul)
    }
    return prod;


}
 

console.log("ProductFunction",ProductFunction(array))