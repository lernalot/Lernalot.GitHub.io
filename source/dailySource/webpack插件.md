#### 编写一个webpack插件并使用到vue-cli3


创建一个plugin文件如下:
```javascript
function FileListPlugin (){}

FileListPlugin.prototype.apply = function(compiler) {
    //compiler 代表webpack的环境配置
    //compilation 对象代表了一次资源版本的构建
    compiler.plugin("emit", function (compilation, callback){
        var filelist = "In this build:\n\n";

        for (var filename in compilation.assets){
            filelist += ("- " + filename + "\n");
        }


        compilation.assets["filelist.md"] = {
            source: function(){
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        };

        console.log("pluginA=====")

        callback();
    });
};

module.exports = FileListPlugin;

```

在vue config中配置config

```javascript
  configureWebpack: {
    plugins: [new FileListPlugin()]
  },
  ```
  
  这样就能在dist中生成文件
  ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f16f1dc6435e440993e7171e5c006c92~tplv-k3u1fbpfcp-watermark.image)
  文件内容是  文件名list
