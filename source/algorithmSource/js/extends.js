function parent(age) {
    this.age = age;
    this.name = "parent"
}

parent.prototype.sayName = function() {
    console.log(this.name)
}

function child(...arg) {
    parent.apply(this, arg);
    this.name = "child"
}

function inhhert(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

inhhert(parent, child);

const children = new child(12);

children.sayName();