// 大文件分片上传
const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.static('./uploads'));


//保存的路径
var uploadFolder = './uploads/';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let md5 = req.query.md5 + '/';
        fs.exists(uploadFolder + md5, function (exists) {
            if (!exists) {
                fs.mkdir(__dirname+'/uploads/'+md5,function(err){
                    cb(null, uploadFolder+md5);
                })
            }else{
                cb(null, uploadFolder+md5);
            }
        });
    },
    filename: function (req, file, cb) {
        cb(null, req.query.fileName);
    }
});
var upload = multer({storage: storage});

app.post('/bigUpload', upload.any(), function (req, res) {
    // console.log(req.query);
    // console.log(req.body.fileName);
    // console.log(req.files);
    res.send(JSON.stringify({code:1,message:'上传成功'}));
    res.end();
});

app.post('/merge',function(req,res){
    var bodyObj=JSON.parse(req.body.data);
    var buf;
    var bufArr=[];
    for(let i=0;i<bodyObj.md5_list.length;i++){
        var data = fs.readFileSync(__dirname+'/uploads/'+bodyObj.dirName+'/'+bodyObj.md5_list[i]);
        bufArr.push(data)
    }
    buf=Buffer.concat(bufArr);
    fs.writeFile(uploadFolder+bodyObj.fileName,buf,function(err){
        if(err){
            return console.error(err);
        }
    });
    res.send(JSON.stringify({code:1,message:'合并成功'}));
    res.end();
});

app.listen(3000);
