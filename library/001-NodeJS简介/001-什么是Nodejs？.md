# Node.js概念
>简单来说Nodejs就是运行在服务器端的JavaScript。

### 什么是NodeJS?
javascript是一门脚本语言(可以用来编程的并且直接执行源代码的语言,就是脚本语言),脚本语言都需要一个解析器才能运行。对于写到html中的js，通常是由浏览器去解析执行。对于独立执行的js代码，则需要nodeJS这个解析器解析执行。

每一种解析器都是一个运行环境，不但允许JS定义各种数据结构，进行各种计算，还允许JS使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的JS的用途是操作DOM，浏览器就提供了document之类的内置对象。而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。

Node.js是一个Javascript运行环境(runtime)。实际上它是对Google V8引擎进行了封装。V8引 擎执行Javascript的速度非常快，性能非常好。Node.js对一些特殊用例进行了优化，提供了替代的API，使得V8在非浏览器环境下运行得更好。

Node.JS是一个让开发者可以快速创建网络应用的服务器端JavaScript平台，同时运用JavaScript进行前端与后端编程，开发者可以更专注于系统的设计以及保持其一致性。

### NodeJS特性
以下是一些使得Node.js成为软件架构师的首选的重要特征。

- Node.js库异步和事件驱动 - 所有API异步是非阻塞。 这意味着一个基于Node.js的服务器不会等待API返回数据。 服务器移动到下一个API后调用它，Node.js事件的一个通知机制有助于服务器，以获得从以API调用的响应。

- 非常快 - 正在构建在谷歌Chrome的V8 JavaScript引擎，Node.js库代码执行是非常快的。

- 单线程但高度可扩展 - Node.js使用事件循环单线程模型。事件机制有助于服务器在非阻塞的方式作出反应，并使得服务器的高可扩展性，而不是它创建线程限制来处理请求的传统服务器。 Node.js使用单线程的程序和同样的程序处理比传统的服务器要大的多，比如：比Apache HTTP服务器请求服务的数量大得多。

- 无缓冲 - Node.js的应用从来没有缓冲任何数据。这些应用程序只需输出块中的数据

### common.js
早在Netscape诞生不久后，JavaScript就一直在探索本地编程的路。无奈那时服务端JavaScript走的路均是参考众多服务器端语言来实现的，在这样的背景之下，一没有特色，二没有实用价值。但是随着JavaScript在前端的应用越来越广泛，以及服务端JavaScript的推动，JavaScript现有的规范十分薄弱，不利于JavaScript大规模的应用。那些以JavaScript为宿主语言的环境中，只有本身的基础原生对象和类型，更多的对象和API都取决于宿主的提供，所以，我们可以看到JavaScript缺少这些功能：

- JavaScript没有模块系统。没有原生的支持密闭作用域或依赖管理。
- JavaScript没有标准库。除了一些核心库外，没有文件系统的API，没有IO流API等。
- JavaScript没有标准接口。没有如Web Server或者数据库的统一接口。
- JavaScript没有包管理系统。不能自动加载和安装依赖。  


于是便有了[CommonJS(http://www.commonjs.org)](http://www.commonjs.org)规范的出现，其目标是为了构建JavaScript在包括Web服务器，桌面，命令行工具，及浏览器方面的生态系统。

CommonJS制定了解决这些问题的一些规范，而Node.js就是这些规范的一种实现。Node.js自身实现了require方法作为其引入模块的方法，同时NPM也基于CommonJS定义的包规范，实现了依赖管理和模块自动安装等功能。
