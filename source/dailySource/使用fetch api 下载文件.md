```javascript
downloadData(){
      if(this.state.isExport){
         message.warn("正在导出中！");
         return ;
      }
      this.setState({
         isExport:true
      });
      const str = 'startdate=' + transformReqDate(this.state.requestDate[0]) + '&enddate=' + transformReqDate(this.state.requestDate[1]);
      fetch(window.globalConfig.serviceUrlPrefix + "api/0.2.2/offline/export?" +str).then(res => res.blob().then(blob => {
         let a = document.createElement('a');
         let url = window.URL.createObjectURL(blob);
         let filename = 'data.zip';
         a.href = url;
         a.download = filename;
         a.click();
         window.URL.revokeObjectURL(url);
         this.setState({
            isExport:false
         });
         message.success("导出成功");
      }));
   }
```
