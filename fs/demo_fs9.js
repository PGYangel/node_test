/*
* 创建目录
* fs.mkdir(path[, options], callback)
path - 文件路径。

options 参数可以是：
    recursive - 是否以递归的方式创建目录，默认为 false。
    mode - 设置目录权限，默认为 0777。

callback - 回调函数，没有参数。
* */

var fs=require('fs');

//在tmp目录下创建test目录必须存在tmp目录
fs.mkdir(__dirname+'/tmp/test/',function(err){
    if(err){
        return console.error(err)
    }
    console.log('创建成功')
});
