## ECharts 使用

1. 基本的图形使用相对简单，分为三个步骤：

   1. 初始化ECharts：

      ```javascript
      var task = echarts.init(document.getElementById(task));
      ```

   2. 创建option：一般option内带有title，颜色，横纵坐标参数和name等，API文档中对事件，样式和回调都有相对应的处理

      ```javascript
      option7 = {
      			title: {
      				text:'检测出结节总数'
      			},
      		    color: ['#3398DB'],
      		    tooltip : {
      		        trigger: 'axis',
      		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      		        }
      		    },
      		    grid: {
      		        left: '3%',
      		        right: '4%',
      		        bottom: '3%',
      		        containLabel: true
      		    },
      		    xAxis : [
      		        {
      		            type : 'category',
      		            data : ['结节数量'],
      		            axisTick: {
      		                alignWithLabel: true
      		            }
      		        }
      		    ],
      		    yAxis : [
      		        {
      		            type : 'value'
      		        }
      		    ],
      		    series : [
      		        {
      		            name:'数量',
      		            type:'bar',
      		            barWidth: '40%',
      		            data:[150]
      		        }
      		    ]
      		};
      ```

   3. set option,把配置文件以图形的形式加载出来。

      ```javascript
      task.setOption(toption7)
      ```

   根据API文档，ECharts的API分为四个部分，图表自身部分，图表提供的一些修改方法，如获取宽高，获取配置参数option，重新定义大小，绑定和解绑事件，图表的一些action，以及提供的事件接口AP。事件触发可以被监听。