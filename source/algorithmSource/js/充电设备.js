//let n = Number(readline());;
let n = Number("4");
//let numbers = readline().split(" ").map(Number);
let numbers = ("50 20 20 60 100 200 130 1500 1100 20000 1900").split(" ").map(Number);
//let p_max = Number(readline());
let p_max = Number("2000");
 
let max = 0;
let hash = new Set();
hash.add(0);

for (let i = 0; i < numbers.length; i++) {
    const hash1 = new Set();
    for (const key of hash) {
        let newnum = numbers[i] + key;
        if (newnum <= p_max) {
            max = Math.max(max, newnum);
            hash1.add(newnum);
        }
    }
    // 合并
    hash = new Set([...hash, ...hash1]);
    console.log(hash)
}

console.log(max);