

function curry(fn, ...arg) {
    const fnLen = fn.length;
    return function(...innerArg) {
        const allArg = arg.concat(innerArg);
        if (allArg.length < fnLen) {
            return curry.call(this, fn, ...allArg)
        }
        return fn.apply(this, allArg);
    }
}

function sum(a,b,c) {
    return a + b + c;
}

const cuSum = curry(sum);


//cuSum(1)(2)(3)
console.log([...new Set([1,2,2,2,3,3,4,4])])

console.log(a)
var a =11;