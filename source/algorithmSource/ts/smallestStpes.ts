const getSmallEst = (n: number) => {
    if (n === 1) return 2;
    if (n === 2) return 1;
    if (n === 3) return 1;


    return Math.floor((n - 4) / 3) + 2;
}


console.log(getSmallEst(11))