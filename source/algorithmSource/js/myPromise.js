class MyPromise {
    PENDING = "pending";
    FULLFILLED = "fullfilled";
    REJECTED = "rejected";
    constructor(excutor) {
        this.value = null;
        this.reason = null;
        this.status = this.PENDING;
        // 维护任务队列统一执行
        this.onFullfilled_stack = [];
        this.onRejected_stack = [];

        const resolve = (res) => {
            if (this.status == this.PENDING) {
                this.value = res;
                this.status = this.FULLFILLED;
                this.onFullfilled_stack.forEach(onFullfilled => {
                    onFullfilled(res);
                })
            }
        }

        const reject = (reason) => {
            if (this.status == this.PENDING) {
                this.reason = reason;
                this.status = this.REJECTED;
                this.onRejected_stack.forEach(onRejected => {
                    onRejected(reason);
                })
            }
        }

        // 执行
        try{
            excutor(resolve, reject);
        }catch(e) {
            reject(e)
        }


    }

    then(onFullfilled, onRejected) {
        // 判断函数类型
        // 透传链式调用,返回新的promise实例
        // 加入队列
        onFullfilled = typeof onFullfilled === "function" ? onFullfilled: (value) => value;
        onRejected = typeof onRejected === "function" ? onRejected: (reason) => { throw reason };
        // 判断状态
        if (this.status === this.PENDING) {
            const promise2 = new MyPromise((resolve, reject) => {
                    this.onFullfilled_stack.push(() => {
                        // then的执行结果存储到this.value，供下一个then使用
                        try{
                            const x = onFullfilled(this.value);
                            resolve(x);
                        }catch(e) {
                            reject(e)
                        }
                    });
                    this.onRejected_stack.push(() => {
                        // then的执行结果存储到this.value，供下一个then使用
                        try{
                            const x = onRejected(this.reason);
                            reject(x);
                        }catch(e) {
                            reject(e)
                        }
                    })
            })
            return promise2;
        }

        // 如果fn是同步策略时
        if (this.status === this.FULLFILLED){
            // 执行 onFullfilled
            const promise2 = new MyPromise((resolve, reject) => {
                    try{
                        const x = onFullfilled(this.value);
                        resolve(x);
                    }catch(e) {
                        reject(e)
                    }
                })
            return promise2;
        }

        // 如果fn是同步策略时
        if (this.status === this.REJECTED){
            // 执行 onFullfilled
            const promise2 = new MyPromise((resolve, reject) => {
                    try{
                        const x = onRejected(this.reason);
                        reject(x);
                    }catch(e) {
                        reject(e)
                    }
                })
            return promise2;
        }
    }

}

module.exports = {
    MyPromise
}

const pro = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
pro.then((res) => {
    console.log(res)
    console.log(2)
})