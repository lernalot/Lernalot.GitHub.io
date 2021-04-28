# react.js

> 传统的web应用，操作DOM一般是直接更新操作的，但是我们知道DOM更新通常是比较昂贵的。而React为了尽可能减少对DOM的操作，提供了一种不同的而又强大的方式来更新DOM，代替直接的DOM操作。就是`Virtual DOM`,一个轻量级的虚拟的DOM，就是React抽象出来的一个对象，描述dom应该什么样子的，应该如何呈现。通过这个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。
>
> 为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个diff算法，更新Virtual DOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。

打印一个节点:

```javascript
var p1 = document.getElementById('2');
	var a = new Array();
	// console.log(document.body);
		for(prop in p1){
			a.push(prop);
		}
console.log(a);
//属性值放到一个数组里（228个元素）：
["align", "title", "lang", "translate", "dir", "dataset", "hidden", "tabIndex", "accessKey", "draggable", "spellcheck", "contentEditable", "isContentEditable", "offsetParent", "offsetTop", "offsetLeft", "offsetWidth", "offsetHeight", "style", "innerText", "outerText", "webkitdropzone", "onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "click", "focus", "blur", "onauxclick", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "namespaceURI", "prefix", "localName", "tagName", "id", "className", "classList"…]
```

当js对节点进行属性修改或者事件触发的时候，都会对属性列表数组或者事件列表数组进行一次遍历搜索，一个较长的数组的遍历是一个相对比较消耗性能的过程。

对比react的渲染：

虚拟节点:

> 为了在树之间进行比较，我们首先要能够比较两个节点，在React中即比较两个虚拟DOM节点，当两个节点不同时，应该如何处理。这分为两种情况：（1）节点类型不同 ，（2）节点类型相同，但是属性不同。本节先看第一种情况。
>
> [标准的的Diff算法](http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf)复杂度需要O(n^3)，这显然无法满足性能要求。要达到每次界面都可以整体刷新界面的目的，势必需要对算法进行优化。这看上去非常有难度，然而Facebook工程师却做到了，他们结合Web界面的特点做出了两个简单的假设，使得Diff算法复杂度直接降低到O(n)。
>
> 1. 两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构；
> 2. 对于同一层次的一组子节点，它们可以通过唯一的id进行区分
>
> 当一个节点从div变成span时，简单的直接删除div节点，并插入一个新的span节点。这符合我们对真实DOM操作的理解。
>
> 需要注意的是，删除节点意味着彻底销毁该节点，而不是再后续的比较中再去看是否有另外一个节点等同于该删除的节点。如果该删除的节点之下有子节点，那么这些子节点也会被完全删除，它们也不会用于后面的比较。这也是算法复杂能够降低到O（n）的原因。

相对于 DOM 对象，原生的 JavaScript 对象处理起来更快，而且更简单。DOM 树上的结构、属性信息我们都可以很容易地用 JavaScript 对象表示出来：

```javascript
var element = {

  tagName: 'ul', // 节点标签名

  props: { // DOM的属性，用一个对象存储键值对

id: 'list'
      },
  children: [ // 该节点的子节点
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
{tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
{tagName: 'li', props: {class: 'item'}, children: ["Item 3"]},
      ]
}
```
上面对应的HTML写法是：

```html
<ul id='list'>

  <li class='item'>Item 1</li>

  <li class='item'>Item 2</li>

  <li class='item'>Item 3</li>

</ul>
```

> react渲染：

- react不直接操作dom，将DOM结构存储在内存中，然后同render()的返回内容进行比较，计算出需要改动的地方，最后才反映到DOM中。

- react使用虚拟节点，通过js创建dom节点对象。

- 传统的dom树：传统dom节点是非常庞大的，拥有很多属性,对传统dom的操作如增加或者删除将会引起重排，重排是DOM元素的几何属性变化，DOM树的结构变化，渲染树需要重新计算。页面在下载好文档时会生成两个内部数据结构dom树和渲染树，每次对dom节点的操作引起了重排之后，dom树会发生重新排列，此时渲染树就要开始对页面重新的结构进行计算，从读取dom（更改属性就要对dom对象的属性进行便利查找）到修改属性，把属性重新入栈到dom对象，生成新的dom文档的时候，重排必然引起重绘，重绘就会需要渲染树进行重新计算得到样式。

- 虚拟节点：基本算法过程分为：

  1. 通过js创建dom对象，存储在内存中，react会根据一个根节点（实际节点）：

  ```javascript
  	var ulRoot = ul.render()
  	document.body.appendChild(ulRoot)
  也就是react中：
  ReactDOM.render(<App/>,document.getElementById('ulRoot'));
  ```

  来逐层计算子节点，然后把子节点抛到根节点（ulRoot）下。

  1. js内比较修改后新的虚拟dom树和原来的旧的虚拟dom树，diff算法：
     两个树的完全的 diff 算法时间复杂度为 O(n^3)，在前端里很少跨级移动dom元素，所以一般只会在同一层级对新旧dom树的dom元素进行对比，时间复杂度减为O(n)。差异计算：

  - 深度优先遍历dom树，对比dom数组的差异，把差异存储在一个数组里。

  1. 把差异应用到dom树，dom节点的操作可能会有：
     - 替换掉原来的节点，例如把上面的div换成了section
     - 移动、删除、新增子节点，例如上面div的子节点，把p和ul顺序互换
     - 修改了节点的属性
     - 对于文本节点，文本内容可能会改变。
       每种操作对应一个对象，不同的差异把差异作为对象属性存储到数组里。
  2. 遍历dom树，从存储差异的数组里获得index，然后对dom树的节点数组进行差异操作，差异操作会根据差异数组的对象类型，执行不同的操作，替换删除等等。

- react对变化是一个存储然后批处理的过程，仅对变化的dom进行批处理。

diff算法：

http://www.infoq.com/cn/articles/react-dom-diff

```javascript
//差异更新的几种类型
var UPATE_TYPES = {
    MOVE_EXISTING: 1,
    REMOVE_NODE: 2,
    INSERT_MARKUP: 3
}


//普通的children是一个数组，此方法把它转换成一个map,key就是element的key,如果是text节点或者element创建时并没有传入key,就直接用在数组里的index标识
function flattenChildren(componentChildren) {
    var child;
    var name;
    var childrenMap = {};
    for (var i = 0; i < componentChildren.length; i++) {
        child = componentChildren[i];
        name = child && child._currentelement && child._currentelement.key ? child._currentelement.key : i.toString(36);
        childrenMap[name] = child;
    }
    return childrenMap;
}


//主要用来生成子节点elements的component集合
//这边注意，有个判断逻辑，如果发现是更新，就会继续使用以前的componentInstance,调用对应的receiveComponent。
//如果是新的节点，就会重新生成一个新的componentInstance，
function generateComponentChildren(prevChildren, nextChildrenElements) {
    var nextChildren = {};
    nextChildrenElements = nextChildrenElements || [];
    $.each(nextChildrenElements, function(index, element) {
        var name = element.key ? element.key : index;
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = element;

        //调用_shouldUpdateReactComponent判断是否是更新
        if (_shouldUpdateReactComponent(prevElement, nextElement)) {
            //更新的话直接递归调用子节点的receiveComponent就好了
            prevChild.receiveComponent(nextElement);
            //然后继续使用老的component
            nextChildren[name] = prevChild;
        } else {
            //对于没有老的，那就重新新增一个，重新生成一个component
            var nextChildInstance = instantiateReactComponent(nextElement, null);
            //使用新的component
            nextChildren[name] = nextChildInstance;
        }
    })

    return nextChildren;
}



//_diff用来递归找出差别,组装差异对象,添加到更新队列diffQueue。
ReactDOMComponent.prototype._diff = function(diffQueue, nextChildrenElements) {
  var self = this;
  //拿到之前的子节点的 component类型对象的集合,这个是在刚开始渲染时赋值的，记不得的可以翻上面
  //_renderedChildren 本来是数组，我们搞成map
  var prevChildren = flattenChildren(self._renderedChildren);
  //生成新的子节点的component对象集合，这里注意，会复用老的component对象
  var nextChildren = generateComponentChildren(prevChildren, nextChildrenElements);
  //重新赋值_renderedChildren，使用最新的。
  self._renderedChildren = []
  $.each(nextChildren, function(key, instance) {
    self._renderedChildren.push(instance);
  })


  var nextIndex = 0; //代表到达的新的节点的index
  //通过对比两个集合的差异，组装差异节点添加到队列中
  for (name in nextChildren) {
    if (!nextChildren.hasOwnProperty(name)) {
      continue;
    }
    var prevChild = prevChildren && prevChildren[name];
    var nextChild = nextChildren[name];
    //相同的话，说明是使用的同一个component,所以我们需要做移动的操作
    if (prevChild === nextChild) {
      //添加差异对象，类型：MOVE_EXISTING
      diffQueue.push({
        parentId: self._rootNodeID,
        parentNode: $('[data-reactid=' + self._rootNodeID + ']'),
        type: UPATE_TYPES.MOVE_EXISTING,
        fromIndex: prevChild._mountIndex,
        toIndex: nextIndex
      })
    } else { //如果不相同，说明是新增加的节点
      //但是如果老的还存在，就是element不同，但是component一样。我们需要把它对应的老的element删除。
      if (prevChild) {
        //添加差异对象，类型：REMOVE_NODE
        diffQueue.push({
          parentId: self._rootNodeID,
          parentNode: $('[data-reactid=' + self._rootNodeID + ']'),
          type: UPATE_TYPES.REMOVE_NODE,
          fromIndex: prevChild._mountIndex,
          toIndex: null
        })

        //如果以前已经渲染过了，记得先去掉以前所有的事件监听，通过命名空间全部清空
        if (prevChild._rootNodeID) {
            $(document).undelegate('.' + prevChild._rootNodeID);
        }

      }
      //新增加的节点，也组装差异对象放到队列里
      //添加差异对象，类型：INSERT_MARKUP
      diffQueue.push({
        parentId: self._rootNodeID,
        parentNode: $('[data-reactid=' + self._rootNodeID + ']'),
        type: UPATE_TYPES.INSERT_MARKUP,
        fromIndex: null,
        toIndex: nextIndex,
        markup: nextChild.mountComponent() //新增的节点，多一个此属性，表示新节点的dom内容
      })
    }
    //更新mount的index
    nextChild._mountIndex = nextIndex;
    nextIndex++;
  }



  //对于老的节点里有，新的节点里没有的那些，也全都删除掉
  for (name in prevChildren) {
    if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
      //添加差异对象，类型：REMOVE_NODE
      diffQueue.push({
        parentId: self._rootNodeID,
        parentNode: $('[data-reactid=' + self._rootNodeID + ']'),
        type: UPATE_TYPES.REMOVE_NODE,
        fromIndex: prevChild._mountIndex,
        toIndex: null
      })
      //如果以前已经渲染过了，记得先去掉以前所有的事件监听
      if (prevChildren[name]._rootNodeID) {
        $(document).undelegate('.' + prevChildren[name]._rootNodeID);
      }
    }
  }
}

首先我们拿到之前的component的集合，如果是第一次更新的话，这个值是我们在渲染时赋值的。然后我们调用generateComponentChildren生成最新的component集合。我们知道component是用来放element的，一个萝卜一个坑。

注意flattenChildren我们这里把数组集合转成了对象map,以element的key作为标识，当然对于text文本或者没有传入key的element,直接用index作为标识。通过这些标识，我们可以从类型的角度来判断两个component是否是一样的。

generateComponentChildren会尽量的复用以前的component，也就是那些坑，当发现可以复用component（也就是key一致）时，就还用以前的，只需要调用他对应的更新方法receiveComponent就行了，这样就会递归的去获取子节点的差异对象然后放到队列了。如果发现不能复用那就是新的节点，我们就需要instantiateReactComponent重新生成一个新的component。
```



## react实现todolist 增删改查

> 实现需求：todolist实现增删改查；

> 实现思路：react组件划分。因为用的是localstorage封装了数据库各个组件之间数据库不能同步，所以设计组件的思路是在父组件里进行增删改查后的渲染操作（setstate），父组件app下有增删改查操作，因此有四个子层级组件，考虑到刚开始做删除功能的时候对li有操作，所以把对li的操作（删除），ui样式的变动和渲染统一放在了删除todoitem组件里，因此该组件的功能就是对li执行删除操作，和一些事件处理，组件内容应该返回li和和删除按钮，但是li是一个数组，所以需要做一个循环去不停的渲染todoitem，所以设计一个父组件todomain，todomain的功能就是对数据执行map，map里循环渲染todoitem组件，同事把数组传给子组件todoitem，所以todomain应该是从app（app组件有增加组件传递的数据，并把该数组存到了数据库（localDb），所以要获取这个数组进行渲染）继承数据，因此设计思路如图：



#### 环境搭建工具：node.js,webpack,webpack-dev-server,babel编译jsx,es6

#### 使用框架:react.js,localDb(利用localstorage机制封装的本地数据库),ant-design。(ps:未使用jquery)

#### 安装 gitclone   git@github.com:lernalot/react-todolist-.git ，npm install，注意node-modules里一定要有localDb文件夹。

### 组件分析

- app.js，首先看底部render的子组件：

  ```javascript
  render(){
  	return (
  		<Card className="pannel">
  			<TodoHeader addTodo={this.addTodo.bind(this)} todos={this.state.todos} showAll={this.showAll.bind(this)} />
  			<TodoQuery ref="query" todos={this.state.todos} queryList={this.queryList.bind(this)} />
  			<TodoMain todos={this.state.todos}  changeTodoState={this.changeTodoState.bind(this)} deleteTodo={this.deleteTodo.bind(this)} reviseTodo={this.reviseTodo.bind(this)}/>
  			<TodoRevise ref="modal" todos={this.state.todos} closeDialog={this.closeDialog.bind(this)} reviseContent={this.reviseContent.bind(this)}/>
  		</Card>
  	)
  }
  ```

1. 其中card是从antd引入的一个api，antd是一个view层的框架，提供了一些ui组件可以使用。
2. 引入的组件分别为增加组件，查询组件，渲染组件（子组件删除），修改组件。

- 接下来看增加的渲染操作addTodo方法

```
​```javascript
addTodo(todoItem){
	if(!this.db.get('todos')){
	   this.db.set('todos',[]);
	}        
	this.state.todos.unshift(todoItem);
	if(this.state.todos.length != this.db.get('todos').length){
		this.db.get('todos').unshift(todoItem);
	}
	this.db.set('todos',this.db.get('todos'));
	this.setState({
		todos:this.db.get('todos')
	});
	message.config({
		top:48,
		duration:1
	});
	message.success('增加成功！');
}
​```
```

1. 从代码可以看出this.db代表数据库的操作，set保存，get取值，todoItem是从增加组件传过来的input的值，这里负责入栈操作，并把最新的数组渲染出来。

- 删除操作deleteTodo

  ```javascript
  deleteTodo(timeId){
  	let i =0;
  	for(i=0;i<this.db.get('todos').length;i++){
  		if(this.db.get('todos')[i].timeId == timeId){
  			this.db.get('todos').splice(i,1);
  		}
  	}
  	this.state.todos.map((todo,index) => {
  		console.log(todo);
  		if(todo.timeId == timeId){
  			this.state.todos.splice(index,1);
  		}
  	});
  	this.setState({todos:this.state.todos});
  	this.db.set('todos',this.db.get('todos'));
  	message.config({
  		top:48,
  		duration:1
  	});
  	message.success('删除成功！');
  }
  ```

1. timeId是每一个li生成的时间戳，他是唯一的，删除组件传过来时间戳之后，遍历数据库，找到li，数组删除这个元素。
2. 值得注意的，这里相比增加方法的setState，这里渲染的是this.state.todos，而不是对数据库的渲染，主要是考虑到查询之后当前list有可能为一部分的数组，用户希望是在当前查询到的list删除和显示，所以就渲染了this.state.todos，但之后对数据库进行删除操作，才是真正的对数据做了修改。

- 修改方法：

  ```javascript
  - reviseContent(todo,index,timeId,lastReviseTime){
  	let reviseIndex = Number(index)-1;
  	let reviseObject = {text:todo,index:reviseIndex,timeId:timeId};
  	let i;
  	message.config({
  		top:48,
  		duration:1
  	});
  	this.state.todos.splice(reviseIndex,1,reviseObject);
  	this.setState({todos: this.state.todos});
  	for(i=0;i<this.db.get('todos').length;i++){
  		if(this.db.get('todos')[i].timeId == timeId){
  			this.db.get('todos')[i] = reviseObject;
  			this.state.todos[i].lastReviseTime = lastReviseTime;
  		}
  	}
  	this.db.set('todos', this.db.get('todos'));
  	this.refs.modal.setState({
  	  visible: false,
  	});
  	// message.success('修改成功！');
  	document.getElementById('reviseinput').value = '';
  }
  ```

1. 修改方法也是从数据库找到指定的数据，数据库修改之后，显示当前this.state.todos。
2. 这里的lastReviseTime是最后一次修改时间，通过修改组件传入。

- 查询方法queryList：

```javascript
- queryList(queryArr){
        message.config({
            top:48,
            duration:1
        });
        if(this.state.todos.length == this.db.get('todos').length && queryArr.length == 0){
            message.warning('查询内容不存在');
            return;
        }
        if(queryArr.length == 0){
            message.warning('当前list不存在查询内容，已为您转到全部list');
            this.setState({
                todos:this.db.get('todos')
            });
        }else{
                this.setState({
                todos:queryArr
            });
        }     
    }
```

1. queryArr是查询后得到的数组，通过查询组件传过来，查询的基本原理就是从当前list遍历（因为可能存在查询之后再查询操作，再查询的时候，app对数据库做了修改，但TodoQuery的数据库信息不会实时同步，但是this.state.todos会同步，所以根据当前list做查询，如果当前list查不到内容而且list长度和数据库长度不同，就重新渲染一遍this.state.todos，然后让用户再查询），查询思想就是判断查询的str是否出现在数组的元素里，通过indexOf方法判断索引是否大于-1即可。

### TodoMain组件：

```javascript
- return (
        <ul className="todo-list">
            {this.props.todos.map((todo, index) => {
                //return <li style={listStyle}>{this.props.todos[index].text}</li>
                return <TodoItem key={index} text={todo.text} isDone={todo.isDone} lastReviseTime={todo.lastReviseTime} timeId={todo.timeId} index={index} {...this.props} />
                //return <TodoItem key={index} {...todo} index={index} {...this.props}/>
                //map对数组进行了遍历，todo表示每一个数组元素text，index代表索引，所以让todoitem渲染的过程是一个循环的渲染过程，每次渲染不一样，是动态组件渲染
                //作为动态组件，需要一个key，每次渲染的时候key不同，才会显示不同的渲染，是一个表示的渲染
            })}
        </ul>
    )
```

1. 使用map对数据进行遍历渲染，注意spread操作符，{…todo},{...props},spread操作符把props，todos的属性和方法传递到子组件TodoItem。
2. 这里是一个循环，所以return的TodoItem组件是一个动态组件，根据react组件的动态机制，需要在todoItem组件里设置一个key，并要保证每次key的值都不一样，也就是渲染的列表的，渲染是对this.state.todos的渲染，列表每一项都有不同的index，所以取值key={index}。

### TodoItem组件

```javascript
- export default class TodoItem extends React.Component{
	    constructor(){
	        super();
	        this.state = {
	            checkAll:false
	        }
	    }
	
	    // 鼠标移入
	    handlerMouseOver(){
	        ReactDom.findDOMNode(this.refs.deleteBtn).style.display = "inline";
	        ReactDom.findDOMNode(this.refs.changeBtn).style.display = "inline";
	    }
	
	    // 鼠标移出
	    handlerMouseOut(){
	        ReactDom.findDOMNode(this.refs.deleteBtn).style.display = "none";
	        ReactDom.findDOMNode(this.refs.changeBtn).style.display = "none";
	    }
	
	    // 删除当前任务
	    handlerDelete(){
	        this.props.deleteTodo(this.props.timeId);
	        console.log(this.props.timeId);
	    }
	    reviseTodo(){
	        this.props.reviseTodo(this.props.text,this.props.index,this.props.timeId);
	    }
	
	    render(){
	        let doneStyle = this.props.isDone ? {color: 'red'} : {color: '#57c5f7'};
	
	        return (
	            <li
	                onMouseOver={this.handlerMouseOver.bind(this)}
	                onMouseOut={this.handlerMouseOut.bind(this)}
	                ref='checkList'
	            >
	                <span style={doneStyle} className="listContent">{this.props.text}</span>
	                <Button ref="deleteBtn" onClick={this.handlerDelete.bind(this)} style={{'display': 'none'}} className="fr libtn-height">删除</Button>
	                <Button ref="changeBtn" style={{'display': 'none'}} className="change libtn-height" onClick={this.reviseTodo.bind(this)}>修改</Button>
	                <span className='product-time'>创建时间：{this.props.timeId}</span><span className='revise-time'>最后修改时间：{this.props.lastReviseTime}</span>
	            </li>
	        )
	    }
	}
```

1. React.findDOMNode(this)可以获取当前这个组件标签。
2. 在元素中定义ref=xxx属性，就可以通过React.findDOMNode(this.refs.xxx)获取到这个元素。
3. 给元素定义class类名的时候要使用className，这里最后修改时间是从修改组件传过来的，TodoItem和TodoRevise没有通信关系，TodoRevise把数据传到app，然后下发到TodoItem显示。（是否有其他方式解决互不相干（兄弟节点或者其他）的组件之间的通信关系？）

### TodoRevise组件

```javascript
- class TodoRevise extends React.Component {
	    constructor(){
	        super();
	        this.state={
	            visible: false
	        };
	    }
	    // 绑定键盘回车事件，添加新任务
	    showModal(todo,index,timeId) {
	        this.setState({
	          visible: true,
	          reviseList: todo,
	          reviseIndex:index*1+1,
	          reviseTimeId:timeId
	        });
	    }
	    handleOk() {
	        let newList = document.getElementById('reviseinput').value;
	        let lastReviseTime = new Date().getTime();
	        this.state.reviseList = newList;
	        this.props.reviseContent(this.state.reviseList,this.state.reviseIndex,this.state.reviseTimeId,lastReviseTime);
	    }
	    handleCancel() {
	        this.props.closeDialog();
	    }
	    copyList(){
	        document.getElementById('reviseinput').value = this.state.reviseList;
	    }
	    keyComplete(event){
	        let lastReviseTime = new Date().getTime();
	        if(event.keyCode == 13){
	            let newList = document.getElementById('reviseinput').value;
	            this.state.reviseList = newList;
	            this.props.reviseContent(this.state.reviseList,this.state.reviseIndex,this.state.reviseTimeId,lastReviseTime);
	        }
	    }
	
	    render() {
	        return (
	          <div>
	            <Modal title="修改列表内容" visible={this.state.visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
	              <div>您正在修改第{this.state.reviseIndex}条，修改内容为<p className="revise_content" onClick={this.copyList.bind(this)}>{this.state.reviseList}</p></div>
	              <p>在下面输入框中对原内容进行修改(支持回车键保存)</p>
	              <Input type="text" id="reviseinput" placeholder="点击蓝色字体将内容复制到输入框" onKeyUp={this.keyComplete.bind(this)}></Input>
	            </Modal>
	          </div>
	        )
	    }
	}
	export default TodoRevise;
```

1. 这里modal是ant-design的一个组件，自带了handOk，show modal，handleCancel方法，修改的显示隐藏就是通过更改this,state.visible(boolean)来决定的，监听确定按钮点击事件和回车键输入事件来执行把修改的对象传给app进行数据库查询找到被修改的对象，并赋值新的修改的内容（由参数传递过来）。

### 总结与思考

#### react渲染性能优点：

- react不直接操作dom，将DOM结构存储在内存中，然后同render()的返回内容进行比较，计算出需要改动的地方，最后才反映到DOM中。

- react使用虚拟节点，通过js创建dom节点对象。

- 传统的dom树：传统dom节点是非常庞大的，拥有很多属性,对传统dom的操作如增加或者删除将会引起重排，重排是DOM元素的几何属性变化，DOM树的结构变化，渲染树需要重新计算。页面在下载好文档时会生成两个内部数据结构dom树和渲染树，每次对dom节点的操作引起了重排之后，dom树会发生重新排列，此时渲染树就要开始对页面重新的结构进行计算，从读取dom（更改属性就要对dom对象的属性进行便利查找）到修改属性，把属性重新入栈到dom对象，生成新的dom文档的时候，重排必然引起重绘，重绘就会需要渲染树进行重新计算得到样式。

- 虚拟节点：基本算法过程分为：

  1. 通过js创建dom对象，存储在内存中，react会根据一个根节点（实际节点）：

  ```javascript
  	var ulRoot = ul.render()
  	document.body.appendChild(ulRoot)
  也就是react中：
  ReactDOM.render(<App/>,document.getElementById('ulRoot'));
  ```

  来逐层计算子节点，然后把子节点抛到根节点（ulRoot）下。

  1. js内比较修改后新的虚拟dom树和原来的旧的虚拟dom树，diff算法：
     两个树的完全的 diff 算法时间复杂度为 O(n^3)，在前端里很少跨级移动dom元素，所以一般只会在同一层级对新旧dom树的dom元素进行对比，时间复杂度减为O(n)。差异计算：

  - 深度优先遍历dom树，对比dom数组的差异，把差异存储在一个数组里。

  1. 把差异应用到dom树，dom节点的操作可能会有：
     - 替换掉原来的节点，例如把上面的div换成了section
     - 移动、删除、新增子节点，例如上面div的子节点，把p和ul顺序互换
     - 修改了节点的属性
     - 对于文本节点，文本内容可能会改变。
       每种操作对应一个对象，不同的差异把差异作为对象属性存储到数组里。
  2. 遍历dom树，从存储差异的数组里获得index，然后对dom树的节点数组进行差异操作，差异操作会根据差异数组的对象类型，执行不同的操作，替换删除等等。

- react对变化是一个存储然后批处理的过程，仅对变化的dom进行批处理。（批处理机制？）

#### react使用

1. 组件规划：明确需求功能，明确功能对应的组件之间的关系。
   - 对于兄弟节点又没有相互引用，由于react单向数据传输机制，项目里使用的是使用this.props.deleteTodo(para1,para2)，将参数从子组件传到父组件，然后由父组件记录到this.state.todos,再传递到其他组件。
2. 子组件进行事件操作，将用户的行为记录下来，然后通过参数传到app做数据处理和setState。