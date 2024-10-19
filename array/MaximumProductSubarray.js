// Examples:

// Input: arr[] = {-2, 6, -3, -10, 0, 2}
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180


// Input: arr[] = {-1, -3, -10, 0, 60}
// Output: 60
// Explanation: The subarray with maximum product is {60}.


const array = [-2, 6, -3, -10, 0, 2];
const maxsubarray=(data)=>{
    if (data.length === 0) return 0; // Handle empty array case

    let maxProduct = data[0];
    let minProduct = data[0]; // To handle negative numbers
    let result = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }
        maxProduct = Math.max(data[i], maxProduct * data[i]);
        minProduct = Math.min(data[i], minProduct * data[i]);
        result = Math.max(result, maxProduct);
    }

    return result;

}

console.log("data",maxsubarray(array).toString())