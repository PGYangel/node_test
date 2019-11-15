// 大文件分片上传
const express=require('express');
const app=express();
const multer = require('multer');

app.all('*', function(req, res, next) {
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
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
var upload = multer({storage: storage});

app.post('/bigUpload', upload.any(), function (req, res) {
    console.log(req.files);
    res.send(req.files);
    res.end();
});

app.listen(3000);
