# ## cornerstone	#



#### API：[https://github.com/chafey/cornerstone/wiki](https://github.com/chafey/cornerstone/wiki)      API：常用API介绍

​	corenerstone 架构：element(canvas父级元素)，image（图片：像素数据和病人数据），viewpoint，canvas外层，包含x,y坐标信息，缩放比例，图像旋转角度；canvas：画布；

​	数据处理机制：如果利用registImageLoader的情况下，数据处理：base64进制数据转换为Unit16 Array无符号整数组，转换为LUT像素数据缓冲，变成缓冲数据写入canvas；

​	数据流程（不使用cornerstoneWADOImageloader）：

​	从base64编码转换为Unit16 Array数组，通过imageId对应，到js调用:

```javascript
cornerstone.loadAndCacheImage（imageId）then(function(){});

```

通过cornerstone注册Imge的API：

```javascript
registerImageLoader：cs.registerImageLoader('example', getExampleImage);
```

其中imageId会对应相应的unit64数组。

​	使用cornerstoneWADOImageLoader.js加载图片的话，只需要在loadAndCacheImage方法里增加dcm文件的路径即可加载:

```javascript
cornerstone.loadAndCacheImage('wadouri:test/dcm/1.3.12.2.1107.5.1.4.64606.30000016102906372427400189650/36.dcm').then(function(image){});
```

​	最后display画布canvas：

```javascript
cornerstone.displayImage(element,image);
```

​	1.  首先对应在某一个区域下子节点绘画canvas，区域id为demo：则初始化canvas标签的代码为

```javascript
var element = $('#demo').get(0);
//load image

```

这一步之后在id为demo的div下就会有一个canvas标签，是空的canvas标签，代码中首先初始化element，然后cornerstone对element做enable:

```javascript
cornerstone.enable(element);
```

​	2. 加载图片，绘画canvas

```javascript
//cornerstone监听图片加载完成事件，对特定的canvas区域监听，加载完图片之后，display
cornerstone.loadAndCacheImage(url).then(function(){
  cornerstone.displayImage(element);
});
//因为涉及到播放，很多时候url会变化，通过多次的循环，对不同的url进行循环加载，display
```

3.   初始化工具和事件，cornerstone有自己的更改样式的API，例如

     ```javascript
     cornerstone.loadAndCacheImage(url).then(function(){
       cornerstoneTools.toolStyle.setToolWidth(3);
       cornerstoneTools.toolColors.setToolColor("#ffcc33");
       cornerstoneTools.toolColors.setActiveColor("#0099ff");
       cornerstoneTools.toolColors.setFillColor("#0099ff");
     });
     ```

4.   然后在函数里初始化事件和需要使用的工具

     ~~~javascript
       cornerstone.loadAndCacheImage(url).then(function(){
         cornerstoneTools.mouseInput.enable(element);
         cornerstoneTools.mouseWheelInput.enable(element);
         cornerstoneTools.keyboardInput.enable(element);
         cornerstoneTools.toolColors.setToolColor("#FF0000");
         cornerstoneTools.toolColors.setActiveColor("#FFFF00");
         cornerstoneTools.toolStyle.setToolWidth(1);
         cornerstoneTools.textStyle.setFontSize(20);
         cornerstoneTools.textStyle.setBackgroundColor("rgba(192,192,192,0.8)");
         cornerstoneTools.wwwc.activate(element, 1);
         cornerstoneTools.pan.activate(element, 2); 
         cornerstoneTools.zoom.activate(element, 4);
         cornerstoneTools.zoomWheel.activate(element); 
         cornerstoneTools.probe.enable(element);
         cornerstoneTools.length.enable(element);
         cornerstoneTools.ellipticalRoi.enable(element);
         cornerstoneTools.rectangleRoi.enable(element);
         cornerstoneTools.angle.enable(element);
         cornerstoneTools.highlight.enable(element);
       }
     ~~~

       其中可以看出初始化的滚轮事件，鼠标输入事件，以及初始化的工具。

       5.编写功能按钮，监听按钮点击事件

     ```javascript
       $('#probe').on('click',function(){
       		console.log('probe');
       		activate('#probe');
       		disableAllTools();
       		cornerstoneTools.probe.activate(element, 1);
       	});
     ```

       ​

对该工具如probe按钮点击事件监听，工具就会激活，就能在canvas上使用了。