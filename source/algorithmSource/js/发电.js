



let ans = 0;
const get = () => {
    for (let i = 0; i < w - b; i++) {
        for (let j = 0; j < h - b; j++) {
            let t = 0;
            for (let k = 0; k < b; k++) {
                for (let l = 0; l < b; l++) {
                    t += mar[x+i][y+j]
                }
            }
            if (t > tar) {
                ans ++;
            }
        }
    }
}