
#### http 请求方式
``` java
HEAD POST DELETE OPTIONS CONNECT TRACE GET PUT DELETE

GET POST:获取数据   post更倾向于提交 修改数据  get倾向于获取数据
HEAD: 发起指定资源的请求 但不相应资源内容

PUT: 更新资源内容
CONNET: 将连接改为管道的服务器
TRACE: 请求服务器回显收到的请求信息  主要用于测试和诊断
OPTIONS: 获取资源请求 javascript使用XMLHttpRequest时，如果是cors跨域，则会先发送OPTIONS的预检请求 判断服务器是否可达
```


#### http 状态码：
  信息响应
  - 100 continue 可继续请求
  - 101 swtich protocal 同步切换协议
  - 102 processing 收到请求无资源可用
  - 103 early hints 预加载资源
  
  响应成功
  - 200 ok get post put delete options trace connect head
  - 201 created 已创建资源
  - 202 accepted 资请求已经收到  但诶呦结果
  - 203 Non-authoritative-informarion 非授权信息 服务器已经处理响应  但返回头部元信息不是在原始服务器上的有效集合
  - 204 no-content 无内容
  - 205 reset-content 重置内容 无返回
  - 206 partial-content 响应部分内容
  - 207 代表之后的消息体是XML消息体
  
  重定向
  - 300 多种选择
  - 301 资源永久移动到新位置
  - 302 临时移动 资源临时从不同的URI上响应
  - 303 查看其它位置
  - 304 未修改
  - 305 使用代理
  - 307 临时重定向
  - 308 用具重定向 请求地理不得修改请求的方式


