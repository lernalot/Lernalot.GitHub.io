

const quickSort = (arr) => {
    if (!arr.length) {
        return [];
    }
    let left = [];
    let right = [];
    const private = arr.splice((Math.floor(arr.length / 2)), 1);
    for(let i = 0 ; i < arr.length; i++) {
        if (arr[i] < private) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(private, quickSort(right))
}

console.log(quickSort([1,231,123,2,12,424,1,1,23123,21,23,123]))

console.log({}.toString())