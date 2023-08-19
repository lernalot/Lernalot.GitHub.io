const purposeStr = (str, tar) => {
    let ans = '';
    let max = -1;
    const hash = new Map();
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const item = str[j];
            if (!hash.get(item)) {
                hash.set(item, 1);
            } else {
                let val = hash.get(item);
                hash.set(item, ++val)
            }
            if (hash.get(item) <= 2 && item != tar) {
                max = Math.max(max, j - i + 1);
                console.log(str.substring(i, j+1))
            } else {
                hash.clear();
                break;
            }
        }
    }
    return max;
}

console.log(purposeStr("ABACA123D", "S"));