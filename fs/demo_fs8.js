/*
* 删除文件
* fs.unlink(path, callback)
path - 文件路径。

callback - 回调函数，没有参数。
* */
var fs = require("fs");

fs.unlink('deltest.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
});
