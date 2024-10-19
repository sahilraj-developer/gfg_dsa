// Input  : arr[] = {4, 5, 6, 7, 0, 1, 2}, key = 0
// Output : 4
// Input  : arr[] = { 4, 5, 6, 7, 0, 1, 2 }, key = 3
// Output : -1
// Input : arr[] = {50, 10, 20, 30, 40}, key = 10   
// Output : 1


function pivotedSearch(arr, key) {
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === key) {
            return mid;
        }

        if (arr[mid] >= arr[low]) {
            if (key >= arr[low] && key < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        else {
            if (key > arr[mid] && key <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

const arr1 = [4, 5, 6, 7, 0, 1, 2];
const key1 = 0;
const result1 = pivotedSearch(arr1, key1);
console.log(result1);