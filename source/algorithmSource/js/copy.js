function jump (n){
    let i = 1,j = 2,k = i + j,step = 3;
    if (n<3) {
        return n;
    }
    while(step < n) {
        let temp = j;
        i = j;
        j = k;
        k = i+j;
        step ++;
    }
    return k;
}

console.log(jump(4))