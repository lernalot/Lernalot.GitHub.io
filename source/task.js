// const gettaskTime = (arr = []) => {
//     const times = arr[2];
//     const ans = [];
//     for (let i = 0 ; i <= times; i++) {
//         ans.push(i * arr[0] + (times - i) * arr[1]);
//     }
//     return ans;
// }


// console.log(gettaskTime([1,2,3]))
let v = Array(4).fill().map(() => {
    return Array(41).fill(0)
})