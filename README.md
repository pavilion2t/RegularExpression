### 基本语法   
Regular Expression 按照某种规则去匹配符合条件的字符串（目的是查找或替换） 
  ```
  find ./ -name *.txt    // 在当前目录下查找所有的txt文件    
  ```    
  
像上面简单的可以一眼看出意思，但是复杂的可以借助工具非常形象学习使用。
[官网地址](www.regexper.com) [GitHub仓库地址](https://github.com/javallone/regexper-static)   

### 实例化RegExp对象      
* 字面量    
  ```
  var reg = /\bis\b /g   
  ```   
  
上面正则表达式表示找出is字符，\b代表单词边界，g代表全文。   
  ```  
  var reg = /\bis\b /g    
  "She is a girl. This is a Ipad".replace(reg, "IS ")
  // "She IS a girl. This IS a Ipad"     
  ```      
 * 构造函数    
   ```   
   var reg = new RegExp("\\bis\\b" , "g");    
   "She is a girl. This is a Ipad".replace(reg, "IS")     
   // "She IS a girl. This IS a Ipad"      
   ```     
      
 
 



