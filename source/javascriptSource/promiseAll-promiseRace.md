### promise all   promise race解析
```javascript
//promiseall  等待所有成功后才返回 如果一个reject 则这个reject作为promiseall  reject的原因

        promiseAll(promises) {
            if (!Array.isArray(promises)){
                throw new Error("promises must be an array");
            }
            return new Promise(function (resolve, reject) {
                const promiseNum = promises.length;
                let resolveCount = 0;
                let resolveValues = new Array(promiseNum);
                for (let i = 0; i < promiseNum; i ++){
                    //接受指定值返回promise 如果return promise则该方法返回promise
                    //返回一个给定值的promise对象 如果值是promise 则返回这个promise  这样当到达复合条件的时候 内部返回resolve的promise作为promise.all的返回
                    //如果promise参数异常 则执行err函数 状态变为onrejected
                    Promise.resolve(promises[i].then(res => {
                        resolveCount ++;
                        resolveValues.push(res);
                        if (resolveCount === promiseNum){
                            return resolve(resolveValues)
                        }
                    }), err => {
                        return reject(err)
                    })
                }
            })
        },
        //当任意一个promise返回成功或者失败的时候立马改变promise的状态
        promiseAllRace(promises){
            if (!Array.isArray(promises)){
                throw new Error("promises is not an array");
            }
            return new Promise(function (resolve, reject) {
                promises.forEach(item => {
                    Promise.resolve(item).then(res => {
                        resolve(res)
                    }, err => {
                        reject(err)
                    })
                })
            })
        }
```
