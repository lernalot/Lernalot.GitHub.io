const getName = (str) => {
    let initIndex = str.length-2;
    let ans = "";
    let flag = false;
    if (!isNaN(str[str.length - 1])) {
        initIndex = str.length -1;
    }
    for (let i = initIndex; i >= 0; i--) {
        if (isNaN(str[i]) || flag){
            ans += str[i];
            flag = true;
        }
    }
    return ans.split("").reverse().join("");
  }
function solution(n, r) {
    const hashMap = new Map();
    let colNumber = 0;
    let succ = 0;
    n.forEach((s, index) => {
      hashMap.set(s, r[index])
    })
    n = n.sort();
    for (let i =0; i < n.length; i++) {
      const tem = n[i];
      const sign = tem[tem.length - 1];
      if (!isNaN(Number(sign))) {
        // 数字
        colNumber ++;
        if (hashMap.get(tem) === "passed") {
           succ ++;
        }
      } else {
        // 分组
        let succFlag = true;
        if (hashMap.get(tem) != "passed") {
            succFlag = false;
        }
        for (let j =i; j < n.length; j++) {
            const word = getName(tem);
            const backword = getName(n[j]);
            if (word === backword) {
                if (hashMap.get(n[j]) != "passed") {
                    succFlag = false;
                }
            }else {
                colNumber ++;
                i = j - 1;
                break;
            }
        }
        if (succFlag) {
            succ++;
        }
      }
    }
    return Math.round(succ / colNumber * 100);
  }

  console.log(solution(["test1", "1name2a", "1name2b","1haha3a", "haha13b", "haha3c", "1jack4a", "jack4b"], ["passed", "failed", "passed","passed","passed","passed", "timeout", "failed"]))