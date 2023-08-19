//let input1= readline().split(" ").map(Number);
let input1= "5 3".split(" ").map(Number);
 
var rows = input1[0];
var cols = input1[1];
var items = [];
let test = [
            "10 12 =C5",
            "15 5 6",
            "7 8 =3+C2",
            "6 =B2-A1 =C2",
            "7 5 3"
        ];
for (let i = 0; i < rows; i++) {
    //let content = readline().split("[\\t ]+");
    items[i]= test[i].split(" ");
}
 
//let sel = readline().split(":");
let sel = "B2:C4".split(":");
// 求值回溯
let startX = sel[0][0].charCodeAt() - 65;
let startY = sel[0][1]*1;

let endX = sel[1][0].charCodeAt() - 65;
let endY = sel[1][1]*1;

const getPos = (str) => {
    // 数字直接返回数数字
    
    const j = str[0].charCodeAt() - 65;
    const i = str[1]*1 - 1;
    return {
        i, j
    }
}

const isNumber = (str) => {
    if (!isNaN(Number(str))) {
        return Number(str);
    }
}

const getNum = (x, y) => {
    const str = items[x][y];
    if (!isNaN(Number(str))) {
        return Number(str);
    } else {
        if (str.indexOf("-") > 0) {
            const incIndex = str.split("-");
            let num0 = incIndex[0].substr(1);
            let num1 = incIndex[1];

            if (isNumber(num0)) {
                num0 = num0 * 1;
            } else {
                const {i, j} = getPos(num0);
                num0 = getNum(i , j);
            }
            if (isNumber(num1)) {
                num1 = num1 * 1;
            } else {
                const {i, j} = getPos(num1);
                num1 = getNum(i , j);
            }
            return num0 - num1;
        } else if (str.indexOf("+") > 0){
            const incIndex = str.split("+");
            let num0 = incIndex[0].substr(1);
            let num1 = incIndex[1];

            if (isNumber(num0)) {
                num0 = num0 * 1;
            } else {
                const {i, j} = getPos(num0);
                num0 = getNum(i , j);
            }
            if (isNumber(num1)) {
                num1 = num1 * 1;
            } else {
                const {i, j} = getPos(num1);
                num1 = getNum(i , j);
            }
            return num0 + num1;
        }
        else {
            const sign = str.split("=")[1];
            const {i, j} = getPos(sign);
            return getNum(i, j);
        }
    }
}



const numberMartrix = Array(rows).fill(0).map(() => Array(cols).fill(0))
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        numberMartrix[i][j] = getNum(i, j);
    }
}
console.log(numberMartrix)

let sum = 0;
for (let i = startY; i <= endY; i++) {
    for (let j = startX; j <= endX; j++) {
        console.log(i-1 , j)
        sum += numberMartrix[i-1][j];
    }
}
console.log(sum)