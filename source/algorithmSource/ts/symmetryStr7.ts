const getNextStr = (str: string): string => {
    let ans = "";
    interface IstrMap {
        [key: string]: string
    }
    const strMap: IstrMap = {
        "R": "B",
        "B": "R"
    }
    for (const key of str) {
        ans += strMap[key]
    }
    ans += ans.split("").reverse().join("");
    return ans;
}

const getStr = (n: number): string => {
    interface Idp {
        [key: number]: string
    }
    const dp:Idp = {};
    dp[1] = "R";
    dp[2] = "BR";
    for(let i = 3; i <= n; i++) {
        dp[i] = getNextStr(dp[i-1])
    }
    return dp[n];
}

console.log(getStr(5));


