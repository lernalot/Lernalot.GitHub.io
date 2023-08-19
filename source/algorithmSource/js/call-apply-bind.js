

Function.prototype.call = function(context, ...args) {
    context = context || window;
    const sym = Symbol("fn");
    context[sym] = this;
    context[sym](args);
    delete context[sym]
}