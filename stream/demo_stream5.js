// 解压文件
var fs=require('fs');
var zlib=require('zlib');
fs.createReadStream('test.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('test2.txt'));

console.log('解压完毕');
