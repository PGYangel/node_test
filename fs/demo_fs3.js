/*
* 获取文件信息
* fs.stat(path, callback)
* path - 文件路径。
* callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
*
* stats类中的方法有：
方法	描述
stats.isFile()	如果是文件返回 true，否则返回 false。
stats.isDirectory()	如果是目录返回 true，否则返回 false。
stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
* */

var fs=require('fs');

fs.stat('readtest.txt',function(err,stats){
    console.log(stats)
});
