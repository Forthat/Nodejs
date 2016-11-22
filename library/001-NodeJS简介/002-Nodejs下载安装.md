# NodeJS下载安装
> NodeJS提供了一些安装程序可以从[nodejs.org](https://nodejs.org/en/)下载安装。

Windows系统下，选择和系统版本匹配的.msi后缀的安装文件。Mac OS X系统下，选择.pkg后缀的安装文件。

![文件类型](images/Nodejs.png)

### 管理Nodejs版本
n是Node的一个模块，作者是TJ Holowaychuk（鼎鼎大名的Express框架作者），就像它的名字一样，它的理念就是简单：

"no subshells, no profile setup, no convoluted api, just simple"   
n模块是专门用来管理node.js的版本的。
安装n模块：
```
npm install n -g
```
安装完成之后，直接输入n后输出当前已经安装的node版本以及正在使用的版本（前面有一个o），你可以通过移动上下方向键来选择要使用的版本，最后按回车生效。
```
$ n
    0.10.1
  o 4.4.3
    6.2.0
```
安装最新的版本
```
$ n latest
```
安装稳定版本
```
$ n stable
```
n后面也可以跟随版本号比如：
```
n v0.10.26

n 0.10.26
```
删除某个版本
```
$ n rm 0.10.1
```
以指定的版本来执行脚本
```
$ n use 0.10.21 some.js
```
