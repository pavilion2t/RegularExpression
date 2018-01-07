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
   
### 标识符    
* g: 表示全局模式，即模式被应用于所有字符串   
* i：表示不区分大小写模式（case-insensitive）   
* m: 表示多行模式       

  ```
  "She is a girl. Is she?".replace(/\bis\b/g, "777")   
  // "She 777 a girl. Is she?"      
  "She is a girl. Is she?".replace(/\bis\b/gi, "777")      
  "She 777 a girl. 777 she?"      
  ```        
  
### 元字符
> 正则表达式中有两种基本字符类型： 原义文本字符 、元字符 . * + ? ^ | \ () {} []    

### 字符类   
一般情况下正则表达式一个字符对应字符串一个字符 ab\t的含义是 "ab" + tab      
有时希望匹配某类字符，我们使用元字符[]来构建一个简单的类   
      
  ```
  "a1b2c3d4".replace(/[abc]/g, "YYY")    
  // "YYY1YYY2YYY3d4"       
   "a1b2c3d4".replace(/[^abc]/g, "YYY")        
   // "aYYYbYYYcYYYYYYYYY"   ^表示反向类    
   ```   
   

  
  


