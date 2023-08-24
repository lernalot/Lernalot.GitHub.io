function deepCopy(obj, map = new WeakMap()) {
    if (map.get(obj)) {
        return map.get(obj)
    }
    let res;
    if (/^(RegExp|Date)$/i.test(constructor.name)) {
        // 创建一个新的特殊对象(正则类/日期类)的实例
        return new constructor(target);  
    }
    if (typeof obj === "object") {
        map.set(obj, true);
        res = obj instanceof Array ? []: {};
        for (let key in obj) {
            res[key] = deepCopy(obj[key], map);
        }
    } else {
        res = obj;
    }
    return res;
}

const data = {
    a:1,
    b: {
        c: 1,
        d: 1,
    },
    c: [1,2,3,4],
}

const c = {
    b: {
        c: 1,
        d: 1,
    },
}
data.d = c;
c.c = data;
const a = deepCopy(c)
console.log(a)