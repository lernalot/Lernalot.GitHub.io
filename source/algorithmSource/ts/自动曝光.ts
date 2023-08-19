

const getSum = (nums: number[]): number => {
    let sum: number = 0;
    for(let i =0; i < nums.length; i++) {
        let temp = nums[i];
        if (temp < 0) {
            temp = 0;
        }
        if (temp > 255) {
            temp = 255;
        }
        sum += temp;
    }
    return sum;
}

// 127到255求k
let min = Number.MAX_SAFE_INTEGER;
let ans = 0;
const getAns= (nums: number[] = []): number => {
    for (let i = -127; i < 255; i++) {
        if (Math.abs(getSum(nums) / nums.length + i - 128) < min) {
            min = Math.abs(getSum(nums) / nums.length + i - 128);
            ans = i;
        }
    }
    return ans;
}

console.log(getAns([128,128,129,129]))