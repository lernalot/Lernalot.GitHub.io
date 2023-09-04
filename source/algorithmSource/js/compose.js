function compose(middlewares = []) {
    return function(context, next) {
        let index = -1;
    
        return dispatch(0);
        function dispatch(i) {
            if (i <= index) {
                throw new Error(11)
            }
            let fn = middlewares[i];
            if(i === middlewares.length) fn = next
            if (!fn) return Promise.resolve();
            try{
                return Promise.resolve(fn(context, function next() {
                    return dispatch(i + 1)
                }))
            }catch(e) {
                return Promise.reject(e)
            }
        }
    }
}

function compose(middlewares = []) {
    return function(context, next) {
        let index = -1;

        return dispatch(0)
        function dispatch(i) {
            if (i < index) {
                throw new Error()
            }
            let fn = middlewares[i];
            if (i === middlewares.length) fn = next;
            if (!fn) return Promise.resolve();

            try{
                return Promise.resolve(fn(context, function next() {
                    return dispatch(i + 1)
                }))
            }catch(e) {
                return Promise.reject(e)
            }
        }
    }
}

const a = async (ctx, next)=>{
    console.log(1)
    await next();
    console.log(1)
}

const b = async (ctx, next) => {
    console.log(2)
    await next();
    console.log(2)
}

const c = async (ctx, next) => {
    console.log(3)
}

const d = compose([a, b, c])

d()