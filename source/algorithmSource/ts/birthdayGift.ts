/**
 * @description 二分查找生日礼物
 * 
 */

const getRes = (cakes: number[], gifts: number[], money: number): number => {
    let ans = 0;
    const sortGift = gifts.sort((a, b) => a - b);
    for(let i = 0; i < cakes.length; i++) {
        if (money <= cakes[i]) {
            continue;
        }
        const gift = money - cakes[i];
        const giftSum = findGiftIndex(sortGift, gift);
        console.log(sortGift, gift, giftSum)
        if (giftSum > 0) {
            ans += giftSum + 1
        } else {
            let index = -giftSum;
            ans += index;
        }
    }
    return ans;
}


const findGiftIndex = (gifts: number[], gift: number): number => {
    let left = 0;
    let right = gifts.length - 1;
    while(left <= right) {
        const middleIndex = Math.floor((left + right) / 2)
        const middle = gifts[middleIndex];
        if (gift < middle) {
            right = middleIndex - 1;
        } else if (gift > middle) {
            left = middleIndex + 1;
        } else {
            // 向右查找最后一位符合的
            if (middleIndex === gifts.length - 1 || gifts[middleIndex] != gifts[middleIndex + 1]) {
                return middleIndex;
            } else {
                left = middleIndex + 1;
            }
        }
    }
    return -left;
}


console.log(getRes([10, 20, 5], [5,5,2], 15))