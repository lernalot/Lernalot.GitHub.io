



const bubble = (arr =[]) => {
    for (let i =0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let tem = arr[j];
            if (arr[j] > arr[j+1]) {
                arr[j] = arr[j+1];
                arr[j+1] = tem;
            }
        }
    }
    return arr;
}

console.log(bubble([3,1,2,3,44,5,6,8,997,6543,34,5,34,634,6,456]))