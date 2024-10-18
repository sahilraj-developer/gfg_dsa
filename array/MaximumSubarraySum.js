const arr = [2, 3, -8, 7, -1, 2, 3];

const maxSumArray =(array)=>{
    const data=[];
    let sum=0;
    for(let i=0;i<array.length -1;i++){
            sum += array[i]+array[i+1];              
    }
    return sum;

}
console.log(maxSumArray(arr))