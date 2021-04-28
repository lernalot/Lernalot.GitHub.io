有些时候需要用到checkbook的其他颜色背景，如果用原生的checkbook会觉得比较没有视觉美感，所以分享一种实现checkbox里面增加任何背景任何图片的点击。
先贴上html：

<input type="checkbox" class="agree-confirm agree-content" checked="true" id="agree-check">

跟上css：
.agree-confirm{width: 13px;height: 13px;-webkit-appearance: none; background-color: inherit; border:1px solid #18b4ed; border-radius: 3px;}
.agree-confirm:checked:before {
    display: inline-block;
    content:url('../images/login/checkicon-small.png');
    line-height: 14px;
    top:-2px;
    right: 2px;
    color: white;
    position: absolute;
    width: 25px;
}
.agree-confirm:checked{background-color: #18b4ed; border: none;}
.agree-content{position: absolute; top: 14px;right: 133px; transition: background-color ease 0.2s;}
.next-step .login-next{height: 44px; border-radius: 7px;}

从中可以看出，关键的代码是：-webkit-appearance: none;，这句代码对于移动端绝大部分的浏览器，Android，iOS的移动端浏览器都以webkit为内核
兼容，这句代码主要作用就是取消了当前元素的默认样式，我们要实现checkbook的选中状态为其他背景色：所以就跟上了代码：
.agree-confirm:checked{background-color: #18b4ed; border: none;}

而要保证被选中之前背景色为透明，则就是用css：background-color: inherit; 跟随父级颜色即可。
最后看伪类元素：
通过定位，我们可以实现对伪类元素进行背景图片设置，然后就可以实现被选中状态图片显示，仅仅通过css就可以实现交互。


//当我们引进css的时候需要增加版本号，这样就可以避免服务器缓存带来的静态资源没更新的问题。