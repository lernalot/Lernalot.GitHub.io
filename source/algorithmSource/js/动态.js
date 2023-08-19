//let input1 = readline().split(" ").map(Number);
let input1 = "40 3".split(" ").map(Number);
 
let t = input1[0];
let n = input1[1];
 
let w = [];
let val = [];
let test = [
            "20 10",
            "20 20",
            "20 5"
        ];
for (let i=0;i<n;i++){
    //let input2 = readline().split(" ").map(Number);
    let input2 = test[i].split(" ").map(Number);
    w[i] = input2[0];
    val[i] = input2[1];
}
 
let v = Array(n+1).fill().map(()=>Array(t+1).fill(0));
 for (let i = 1; i < v.length; i++) {
    for (let j = 1; j < v[0].length; j++) {
        if (w[i-1] > j){
            v[i][j] = v[i-1][j]
        }else {
            v[i][j] = Math.max(v[i-1][j], v[i-1][j-w[i-1]] + val[i-1])
        }
    }
 }
 
 
console.log(v[n][t]);

const s = "123123asdadASDAd";
console.log(s.toLocaleLowerCase().replace(/[^a-z]/g, ""));

