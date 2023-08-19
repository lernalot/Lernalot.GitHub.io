const find = (str1: string, str2: string) => {
    const ans: string[][] = [];
    const arr1: string[] = str1.split(",");
    const arr2: string[] = str2.split(",");
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if (isCheck(arr1[i], arr2[j])){
                ans.push([arr1[i], arr2[j]])
            }
        }
    }
    return ans;
}

const isCheck = (str1: string, str2: string) => {
    str1 = [...new Set(str1.split(""))].sort().join();
    str2 = [...new Set(str2.split(""))].sort().join();
    if (str1 === str2) {
        return true;
    }
    return false;
}
console.log(find("bdni,wooood", "bind,wrong,wood"));