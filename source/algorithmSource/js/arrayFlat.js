


const flat = (arr) => {
    let res = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (Array.isArray(element)) {
            res = res.concat(flat(element))
        }else {
            res = res.concat(element)
        }
    }
    return res;
}


console.log(flat([1,2,3,[2,3,4,[4,5,6]]]))