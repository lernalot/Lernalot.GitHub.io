```javascript
//根据key值查询value
function getCookie(name) {
   let nameEq = name +'';
   let valueArray = document.cookie.split(";");
   for(let i = 0;i<valueArray.length;i++){
      let singleStr = valueArray[i];
      if(singleStr){
         while (singleStr.charAt(0) === ''){
            singleStr = singleStr.substring(1,singleStr.length);
         }
         if(singleStr.indexOf(nameEq) === 0){
            return unescape(singleStr.substring(nameEq.length+1,singleStr.length));
         }
      }
   }
   return false;
}
//设置cookie的值
function setCookie(name,value,seconds) {
   let Rseconds = seconds || 0;
   let expires = '';
   if(Rseconds !== 0 ){
      let date = new Date();
      date.setTime(date.getTime()+(Rseconds*1000));
      console.log(date.toGMTString())
      expires = ";expires="+date.toUTCString();
   }
   document.cookie = name + "="+ escape (value) + expires;
}
//clear
function clearCookie(name) {
   setCookie(name,'',-1)
}
export {
   getCookie as getCookie,
   setCookie as setCookie,
   clearCookie as clearCookie
}

```
