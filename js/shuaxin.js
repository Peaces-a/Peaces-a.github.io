function reurl(){ 
    url = location.href; //把当前页面的地址赋给变量 url 
    var times = url.split("?"); //分切变量 url 分隔符号为 "?" 
    if(times[1] != 1){ //如果?后的值不等于1表示没有刷新 
    url += "?1"; //把变量 url 的值加入 ?1 
    self.location.replace(url); //刷新页面 
    } 
    } 
    onload=reurl 