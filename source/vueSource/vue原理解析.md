## vue原理

### 原理模块：

1. mvvm 进行双向绑定；
2. 实现mvvm双向绑定需要三个基本模块：
    1. observer模块，监听数据的每次赋值，通知到订阅者，深层级的value值通过递归进行Object.defineProperty；
    2. compile模块，指令编译模块，遍历节点，找到特定的attr或者正则匹配{{}}字符串形式的value值，将指定的v-model或者变量名进行更新；
    3. watcher模块：作为观察者和指令模块的桥梁，提供订阅者函数，每次订阅到的数据变动都会带上特定的key值传递给指令模块，指令模块收到命令后对特定的key值得value进行对比，判断是否更新；

* 在初始化vue的时候，会new一个vue实例，返回指针this；代码如下：
```javascript
   let vueDemo = new Vue({
        el: '#app',
        data: {
            text1: '1',
            text2: '2',
        },
        render() {
            console.log('render')
        }
    })
```
* 使用了Obeject.defineProperty遍历data内的数据；定义对象是否可读可枚举，再给对象属性加上修改器或者获取器;
#### Obeject.defineProperty:
**提供给对象重新定义属性的能力，对对象进行属性修改或者新增属性(不兼容ie8以下浏览器)**
```javascript
    let someThing = {};
    Object.defineProperty(someThing, "name", {
        value: "hisname",
        writbale: false, //ture,
        configurable: false //ture
    });
    //writable为false的时候定义对象不能被修改
    //configurable为false删除和修改对象该属性均无效
```
**该方法提供set方法和get方法，修改对象属性时会触发set方法，获取属性时会触发get方法**
```javascript
    let someThing = {};
    Object.defineProperty(someThing, "name", {
        value: "hisname",
        writbale: false, //ture,
        configurable: false, //ture
        get: funcion(){},
        set: function(value){}
    });
```
    

    * 【get】一旦目标对象访问该属性，就会调用这个方法，并返回结果。默认为 undefined。
    * 【set】 一旦目标对象设置该属性，就会调用这个方法。默认为 undefined。
    
* vue使用的是数据劫持的形式，数据劫持形式是基于发布订阅者模式，使用Obejct.defineProperty对对象的属性进行setter和getter进行数据劫持;


### data数据可监测

* 将data里的数据遍历，并通过Obejct.defineProperty增加set和get方法，将this.data的数据提到this下；

### 模块
1. observer：

