# Node.js模块系统
>为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。  
>模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

### 模块化编程
网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试等等......开发者不得不使用软件工程的方法，管理网页的业务逻辑。
Javascript模块化编程，已经成为一个迫切的需求。理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。
模块化编程解决问题：
1. 命名冲突问题
2. 文件依赖问题

### Node中模块分类
NodeJS中模块分为2类：原生模块和文件模块。
- 原生模块即Node.jsAPI提供的原声模块，原生模块在启动时已经被加载。(如：os模块、http模块、fs模块、buffer模块、path模块等)
```
//调用原生模块不需要指定路径
var http = require('http');
```
- 文件模块为动态加载模块，加载文件模块的主要由原生模块module来实现和完成。原生模块在启动时已经被加载，而文件模块则需要通过调用Node.js的require方法来实现加载。
```
//调用文件模块必须指定路径，否则会报错
var sum = require('./sum.js');
```

### 模块操作
在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

#### require 加载模块
require方法接受以下几种参数的传递：
- http、fs、path等，原生模块。
- ./mod或../mod，相对路径的文件模块。
- /pathtomodule/mod，绝对路径的文件模块。
- mod，非原生模块的文件模块。

require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。模块名可使用相对路径（以./开头），或者是绝对路径（以/或C:之类的盘符开头）。另外，模块名中的.js扩展名可以省略。以下是一个例子。
```
var foo1 = require('./foo');
var foo2 = require('./foo.js');
var foo3 = require('/home/user/foo');
var foo4 = require('/home/user/foo.js');
//foo1 ~ foo4 中保存的是同一个模块的导出对象。
```
```
//加载node 核心模块
var fs = require('fs');
var http = require('http');
var os = require('os');
var path = require('path');
```
加载和使用json文件
```
var data = require('./data.json');
```

#### exports 创建模块
`exports`对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过`require`函数使用当前模块时得到的就是当前模块的`exports`对象。以下例子中导出了一个公有方法。
```
//sum.js
exports.sum = function(a,b){
    return a+b;
}

//main.js
var m = require("./sum");
var num = m.sum(10,20);
console.log(num);
```
#### module
通过`module`对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块导出对象。例如模块默认导出对象默认是一个普通对象，如果想改为一个函数可以通过如下方式：
导出一个普通函数：
```
//sum.js
function sum(a,b){
    return a+b;
}
module.exports= sum;
//main.js
var sum = require('./sum');
sum(10,20);// 30
```
导出一个构造函数：
```
//hello.js
function hello(){
    this.name ="你的名字";
    this.setName = function(name){
        this.name = name;
    }
    this.sayName = function(){
        alert(this.name);
    }
}
module.exports= hello;

//main.js
var hello = require('./hello.js');
var o = new hello();
o.setName('张三');
o.sayName(); // 张三
```

### 模块初始化
一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。

### 模块加载优先级
> 模块加载优先级：已经缓存模块 > 原生模块 > 文件模块 > 从文件加载   

Node.js 的 require方法中的文件查找策略如下：
由于Node.js中存在4类模块（原生模块和3种文件模块），尽管require方法极其简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同。如下图所示：
![模块加载策略](images/nodejs-require.jpg)

### 模块路径解析规则
1. 内置模块  
如果传递给require函数的是NodeJS内置模块名称，不做路径解析，直接返回内部模块的导出对象，例如require('fs')。

2. node_modules目录  
NodeJS定义了一个特殊的`node_modules`目录用于存放模块。例如某个模块的绝对路径是`/home/user/hello.js`，在该模块中使用`require('foo/bar')`方式加载模块时，则NodeJS依次尝试使用以下路径。
```
 /home/user/node_modules/foo/bar
 /home/node_modules/foo/bar
 /node_modules/foo/bar
 ```  

### 主模块
通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，main.js就是主模块。
