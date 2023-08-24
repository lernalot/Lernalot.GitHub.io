

class Scheduler{

    constructor(maxNum) {
        this.limitNum = maxNum;
        this.count = 0;
        this.task = [];
    }

    async add(fn) {
        if (this.count >= this.limitNum) {
            await new Promise((resolve) => {
                this.task.push(resolve);
            })
        }
        this.count ++;
        const result = await fn();
        this.count --;
        if (this.task.length) {
            this.task.shift()();
        }
        return result;
    }
}

const scheduler = new Scheduler(2)

const timeout = (time)=>{
    return new Promise(r=>setTimeout(r, time))
}
const addTask = (time, order) => {
    scheduler.add(()=>timeout(time))
        .then(()=>console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)