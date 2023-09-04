// 给定一个数组,在不开辟新的内存空间的情况下将其中所有的0移动至数组开头。
// 例:
// 输入：
// 	[0, 8, 5, 0, 134, 0, 3, 6, 5, 0, 7, 0]
// 输出：
// 	[0,0,0,0,0,8,5,134,3,6,5,7]
// function changeSort(arr = []) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             let temp = arr[j];
//             if (arr[j] > arr[j+1] && arr[j+1] === 0) {
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr;
// }

// function changeSort(arr = []) {
//     const allLength = arr.length;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0) {
//             const zero = arr.splice(i, 1);
//             arr[allLength - 1] = 0;
//         }
//     }
//     const firstIndex = arr.findIndex(key => key === 0);
//     const allZero = arr.splice(firstIndex);
//     return allZero.concat(arr);
// }

function changeSort(arr = []) {
    for(let i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] !== 0 && arr[i-1] === 0) {
            j = i;
        }
        if (arr[i] === 0) {
            if (j < i) {
                let temp = arr[j];
                arr[j] = arr[i];
                for (let k = j; k <= i;k++) {
                    arr[j+1]=arr[j];
                }
                arr[j+1] = temp;
            }
        }

    }
    return arr;
}

console.log(changeSort([0, 8, 5, 0, 134, 0, 3, 6, 5, 0, 7, 0]))