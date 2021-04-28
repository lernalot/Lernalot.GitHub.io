### jquery 核心API
jQuery.holdReady()
暂停或恢复.ready() 事件的执行。
核心 API
jQuery()
接受一个包含一个CSS选择器的字符串，用于匹配的一组元素。根据提供的原始 HTML 标记字符串，动态创建由 jQuery 对象包装的 DOM 元素。当DOM完成加载的时候绑定一个要执行的函数。
核心 API | 杂项 > 设置
jQuery.noConflict()
放弃jQuery控制$ 变量。
核心 API | 弃用 > 1.7 版本弃用的 API | 已删除的函数
jQuery.sub()
可创建一个新的jQuery副本，其属性和方法可以修改，而不会影响原来的jQuery对象。
核心 API | 延迟对象
jQuery.when()
提供一种方法来执行一个或多个对象的回调函数， Deferred(延迟)对象通常表示异步事件。

jquery.when():
  方法传入一个延迟对象，返回一个promise 对象；接受多个延迟对象
  ```javascript
      $.when($.ajax("/page1.php"), $.ajax("/page2.php")).done(function(a1,  a2){
  /* a1 and a2 are arguments resolved for the
      page1 and page2 ajax requests, respectively */
  var jqXHR = a1[2]; /* arguments are [ "success", statusText, jqXHR ] */
  if ( /Whip It/.test(jqXHR.responseText) ) {
    alert("First page has 'Whip It' somewhere.");
  }
});
  ```
  
  jquery的trigger方法：
  接受两个参数：
    eventType：
    类型: String
    以后包含JavaScript事件类型的字符串，比如click 或 submit。
    extraParameters：
    类型: Array, PlainObject
    传递给事件处理程序的额外数组参数。
    
    可以对相应匹配的元素进行代码触发事件，接受事件类型和函数参数传递
    
    
    .innerHeight()
为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。
CSS | 尺寸 | DOM 操作 > CSS 属性
.innerWidth()
为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，但是不包括border。
