const getScore=(logArr: number[]): number => {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    if (logArr.length <= 1) {
        return logArr[0] || 0;
    }
    for (let i = 0; i < logArr.length; i++) {
        sum += logArr[i];
        if (sum < 100) {
            // 迭代最大值
            max = Math.max(max, calScore(i, logArr) - calScore(i-1, logArr))
        } else {
            // 立马上报计算与最大值的对比
            max = Math.max(max, 100 - calScore(i-1, logArr))
            break;
        }
    }
    return max;
}


const calScore=(index:number, logArr: number[]):number => {
    let sum = 0;
    for(let i = 0; i <= index; i++) {
        sum += logArr[i];
    }
    return sum;
}

console.log(getScore([50,60,1]))