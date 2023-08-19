


const map = {
    0: "abc",
    1: "def",
    2: "ghi",
    3: "jkl",
    4: "mno",
    5: "pqr",
    6: "st",
    7: "uv",
    8: "wx",
    9: "yz"
}
const getAns = (nums, target) => {
    const numsArr = nums.split("");
    const curr = [];
    const ans = [];
    const hash = new Set();
    const recusion = (curr) => {
        // dfs 终结点
        if (curr.length === nums.length) {
            // deep copy
            ans.push(curr.concat());
            return;
        }

        for (let i =0; i < numsArr.length; i++) {

        }
    }
}

// const queueAns = (nums, target) => {
//     const numsArr = nums.split("");
//     const queue = [];
//     queue.push("");
//     for (let i = 0; i < numsArr.length; i++) {
//         const size = queue.length;
//         const mapNumber = map[numsArr[i]];
//         for(let j = 0; j < size; j++) {
//             const curr = queue.shift();
//             for (const key of mapNumber) {
//                 if ((curr + key).indexOf(target) < 0){
//                     queue.push(curr + key);
//                 }
//             }
//         }
//     }
//     return queue;
// }

// console.log(queueAns("78", "ux"));