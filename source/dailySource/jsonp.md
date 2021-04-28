jsonp的promise封装
```javascript
        const Jsonp = function(url,data){//data表示需要在请求后接入的参数，map的格式
        	return new promise((resolve,reject)=>{
              let dataString = url.indexOf("?") === '-1'?"?":"&";//接入在url后面的字符串
              let callbackName = 'callbackName';
              url += '$(dataString)callback=$(callbackName)';
              if(data){
                for(let i in data){
                  url += "&$(i)=$(data[k])";
                }
              }
              let jsNode = document.creatElement('script');
              jsNode.src = url;
              //服务端发送的js文件的callback函数是绑定在window对象的，所以客户端定义callback
              window['callBack'] = result =>{
                delete window['callBack'];
                document.body.removeChild(jsNode);
                if(result){
                  resolve(result)
                }else{
                  reject('没有返回数据')
                }
              }
              jsNode.addEventListener('error',()=>{
                delete window['callBack'];
                document.body.removeChild(jsNode);
                resolve("javascript加载资源失败")
              },false);
              document.body.appendChild(jsNode);
        	})
        }
        
        jsonp('http://192.168.0.103:8081/jsonp', {a: 1, b: 'heiheihei'})
        .then(result =>{console.log(result)})
        .catch(err =>{console.log(err)})
        ```
