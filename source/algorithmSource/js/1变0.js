const test = [
    [1,1,0,0],
    [0,0,0,1],
    [0,0,1,1],
    [1,1,1,1]
]
const m = test.length;
const n = test[0].length;
let ans = 0;

const dfs = (i, j) => {
    // 边界
    if ( i < 0 || j < 0 || i > m-1 || j > n-1) return;
    if (test[i][j] === 0) return;
    test[i][j] = 0;

    dfs(i+1,j);
    dfs(i-1, j)
    dfs(i, j+1)
    dfs(i, j-1)
    dfs(i+1, j+1)
    dfs(i-1, j+1)
    dfs(i+1, j-1)
    dfs(i-1, j-1)

}

const getAns = (test) => {
    for (let i= 0; i < m; i++) {
        for (let j= 0; j < n; j++) {
            if (test[i][j] === 1){
                dfs(i, j);
                ans ++;
            }
        }
    }
    return ans;
}

console.log(getAns(test))