css有三个部分，选择符{属性：“值”··}
浏览器对选择符进行严格的解析，将样式作用于指定的选择符对象。
选择符可以是标签，也可以是特定的id,或者class标签#lay表示<div id="lay">.
属性是CSS样式的核心，CSS样式属性丰富，颜色大小，字体，浮动方式等，
属性的值有两种形式，一种是范围，一种是数值，如float属性是right，left，或者none。
实际运用中常有body{background-color:"blue";font-size="23"}
    （1）添加CSS的方法有四种：
     1：链接外部样式表（最适合大型网站的样式定义）：<head>  <link rel="stylesheet" type="text/css" href="3.css"></head>其中rel代表引入的是外部样式表，type表示的是引入的是样式表文件，href代表样式文件的位置。
     2：内部样式表：内部样式表一般位于<head></head>内，以<style></style>结束，<style>标签内引入样式，如:<head><style type="text/css"> body{font-size:12px;
	 font-variant:inherit;
	 color:#00C;}
	 </style></head>
     3:导入外部样式表：导入外部样式表是指在内部样式表<style>标签内引入外部样式文件，@import实现：
	 <head>  <style type="text/css"> @import style.css</style></head>
	 4:内嵌样式：直接在HTML标签内内嵌样式：<div id="" style=color:red;font-size:12px></div>

      
    （2）css的盒模型：
	    所有的页面元素都能够看成一个盒子，占据着的空间理论上来说是大于单纯的内容空间的，因此任何元素都可以用盒子模型描述，content部分与边框border之间有内边距padding-(top bottom left right ),边框与外界元素有一层外补白部分，即：margin:top bottom left right .
		边框具有多种属性，第一种属性border-style:border-top-style\\\,它的属性可以为：none,dotted:点线，dashed：虚线，solid:实现边框，double：双实线边框，groove：边框具有立体感的边槽，ridge：边框成脊型，insert：边框凹陷，outset：边框凸起。baoder具有宽度属性：border-top-width,border的边框颜色属性：border-top-color：边框属性的复合形式：border-top：2px insert blue。
		使用定位属性控制元素的位置，定位属性为position其值有:absolute,fixed,satic,relative,相对定位是指相对于文档的原始布局上元素位置发生改变。fixed表示页面滚动时，元素不随着滚动。浮动属性float设置元素浮在某个元素的周围，<style>.p{img{float:left}</style><body><span class="p">asdasdasd</span></body>这样图形漂浮在asd、、左边。clear属性表示是否允许其他元素漂浮在周围，none，left，right，both。



```csss
sticky:
元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky 对 table 元素的效果与 position: relative 相同。
static
该关键字指定元素使用正常的布局行为，即元素在文档流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效
position: inherit;
position：initial;
position: unset;
```
