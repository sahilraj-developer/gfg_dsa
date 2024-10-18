const array = [1,2,3,3,4,4,4,6,8,9,10,45,12];

const dublicateArray =(data)=>{

    // return data.filter((val,i)=> data.indexOf(val) == i);

    return [...new Set(data)]

}

console.log(dublicateArray(array))