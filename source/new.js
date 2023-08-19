function myNew(fn, ...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(this, args);
    return res instanceof Object ? res : obj;
}

//构造函数
function Person(name,sex){
         this.name=name;
         this.sex=sex
     }
     Person.prototype.getName=function(){
        return this.name
     }

     const zcy=new Person('zcy','男');
     const forceddd=myNew(Person,'forceddd','男');
     console.log(zcy);
     console.log(forceddd);
     console.log(zcy.getName());
     //共享原型上的方法
     console.log(zcy.getName===forceddd.getName);