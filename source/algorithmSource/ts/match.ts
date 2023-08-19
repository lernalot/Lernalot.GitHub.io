const getMatch = (arr: number[][]): number[][] => {

    const res = arr.sort((a, b) => {
        return a[0] != b[0] ? b[0] - a[0] : b[1] - a[1]
    })
    return res;
}

console.log(getMatch([[181, 70], [182,70], [180, 71], [180, 72]]))