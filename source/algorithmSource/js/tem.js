function tem(str, data) {
    const replaceStr = str.replace(/\{\{(\w+)\}\}/g, function(match, key) {
        console.log(match, key)
        return data[key]
    })
    return replaceStr;
}
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "张三",
  age: 18
}
console.log(tem(template, data));