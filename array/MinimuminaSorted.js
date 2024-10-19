function findMin(arr) {
    let res = arr[0];

    for (let i = 1; i < arr.length; i++) {
        res = Math.min(res, arr[i]);
    }

    return res;
}
const arr = [5, 6, 1, 2, 3, 4];
console.log(findMin(arr));