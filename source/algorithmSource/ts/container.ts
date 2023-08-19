
// [2,2,1,1,1] [2,1,1,1] [2,2,2,1,1] [2,1,1,1] [2,2,1,1]  
const getAns = (arr: number[]): number[][] => {
    if (!arr.length) return [];
    const ans:number[][] = [];
    let towSum: number = 0;
    let oneSum: number = 0;
    let threeSum: number = 0;
    arr.forEach(s => {
        switch(s) {
            case 1: oneSum ++;
            break;
            case 2: towSum ++;
            break
            case 3: threeSum ++;
            break
        }
    })
    if (towSum === 0) {
        for(let i = 0; i < oneSum; i++) {
            ans.push([Math.floor(i / 3), i % 3])
        }
        for(let i = 0; i < threeSum; i++) {
            ans.push([Math.ceil(oneSum / 3) + i, 0])
        }
    }
    // 当2的个数大于等于3且余数等于1的个数，竖着搭建是最优方案
    if (towSum  >= 3 && towSum % 3 === oneSum) {
        const standNum = towSum - towSum % 3;
        for(let i = 0; i < standNum; i++) {
            //竖着排列+2
            ans.push([Math.floor(i / 3) * 2, i % 3])
        }
        // 剩下的横着排列
        const exsistHeight = Math.floor(towSum / 3) * 2;
        for (let i = 0; i < towSum % 3; i++) {
            ans.push([exsistHeight + i, 0])
        }
        for (let i = 0; i < towSum % 3; i++) {
            ans.push([exsistHeight + i, 2])
        }
        for(let i = 0; i < threeSum; i++) {
            ans.push([i + exsistHeight + Math.floor(towSum / 3), 0])
        }
    }
    else {
        // 横着搭建
        if (towSum >= oneSum && towSum > 0) {
            for(let i = 0; i < towSum; i++) {
                ans.push([i, 0])
            }
            for(let i = 0; i < oneSum; i++) {
                ans.push([i, 2])
            }
            for(let i = 0; i < threeSum; i++) {
                ans.push([i + towSum, 0])
            }
        }
        // 将2的个数小于1时,通过枚举推论尽量保证填满2木板是最优解，避免使用暴力枚举1-towSum种填补方式计算最小组合方案
        if (towSum < oneSum && towSum > 0) {
            for(let i = 0; i < towSum; i++) {
                ans.push([i, 0])
            }
            for(let i = 0; i < towSum; i++) {
                ans.push([i, 2])
            }
            const moreOne = oneSum - towSum;
            const moreline = Math.ceil(moreOne / 3) + towSum;
            for(let i = 0; i < moreOne; i++) {
                ans.push([towSum + Math.floor(i/3), i % 3])
            }
            for(let i = 0; i < threeSum; i++) {
                ans.push([i + moreline, 0])
            }
        }
    }

    // 经过推论，只有当2的个数为3的倍数时，竖着搭建才有可能比横着搭建所占高度小
    return ans;
}

console.log(getAns([2,2,2,2,1,1,3,3,3]))
console.log(getAns([2,2,2,2,1,3,3,3]))
console.log(getAns([2,2,1,1,1,1,3,3,3]))
console.log(getAns([3,3,3]))
console.log(getAns([2,2,2,2,3,3,3]))
console.log(getAns([1,1,1,3,3,3]))
console.log(getAns([1,1,1,1,1,1]))
console.log(getAns([]))
console.log(getAns([1,1,1,1,2,2,2]))

const toBe = (arr: number[], res: number[][]):boolean => {
    const findRes = getAns(arr);
    let toBe = true;
    findRes.forEach((s, index) => {
        if (s.toString() != findRes[index].toString()) {
            toBe = false;
        }
    })
    return toBe;
}