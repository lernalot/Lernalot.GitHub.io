const getRes = (index: number, str: string):string => {
    let changeStr = '';
    const stack: string[] = []
    for(let i = 0; i < str.length; i++) {
        let temp = str[i];
        if(str[i] === '"') {
            if (!stack.length) {
                stack.push(str[i])
            } else {
                stack.pop()
            }
        }
        if (stack.length) {
            if (temp === "_") {
                temp = "#";
            }
        }
        changeStr += temp;
    }
    const res = changeStr.split("_").map(s => {
        const r = s.replace(/#/g, '_');
        return r;
    })
    res[index] = "******";
    return res.join('_');
}

console.log(getRes(2, 'aaa_password_"a12_45678"_timeout__100_""_'));