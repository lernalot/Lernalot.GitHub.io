const hasContain = (news: string, letter: string): boolean => {
    const newsArr: string[] = news.split("");
    const letterArr: string[] = news.split("");
    newsArr.forEach(n => {
        letterArr.forEach(l => {
            if (l == n) {
                return true;
            }
        })
    })
    return false;
}


console.log(4&1)