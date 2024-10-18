// Input: arr[] = {0, -1, 2, -3, 1}, target = -2
// Output: True
// Explanation: If we calculate the sum of the output,1 + (-3) = -2


// Input: arr[] = {1, -2, 1, 0, 5}, target = 0
// Output: False


const nums = [0, -1, 2, -3, 1];
const target = -2;


const pairwithgivensum =(nums,target)=>{
for(let i=0;i<nums.length;i++){

    for(let j=0;j<nums.length;j++){
        let sum = nums[i]+nums[j];
        if(sum === target){
            return true
        }
    }
}
}

console.log(pairwithgivensum(nums,target))