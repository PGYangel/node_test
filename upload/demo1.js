// multer实现文件上传

const express = require('express');
const app = express();
const multer = require('multer');

//1) single(fieldname) 接收单个文件，通过req.file访问该文件
//2) array(fieldnaem,[maxcount]) 接收多个文件,通过req.files数组方法文件.maxcount指定接收文件最大数.
//3) fields(fields) 接受指定fieldname的文件,fieldname由客户端决定，通过req.files数组方法
//4) any 接收所有文件上传,通过req.files访问文件
//const singleMidle = upload.single("singleFile");//一次处理一张
//const arrMidle  = upload.array("arrayFile", 5);//一次最多处理5张
/*const fieldsMidle  = upload.fields([
    {name:"fieldSingleFile", maxCount:1},
    {name:"fieldArrayFile", maxCount:4}
]);*/
//可同时处理多个上传控件的上传
//实际项目中根据自己的情况，使用以上三种用法之一即可！
// 可全局应用
// app.use(upload.array("file"));

app.use(express.static('./uploads'));

//保存的路径
var uploadFolder = './uploads/';
// 通过 diskStorage 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己先创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳+文件名
        cb(null, Date.now() + '_' + file.originalname);
    }
    /*fileFilter: function(req, file, cb){
        // 限制文件上传类型，仅可上传png格式图片
        if(file.mimetype == 'image/png'){
            cb(null, true)
        } else {
            cb(null, false)
        }
    }*/
});
// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({storage: storage});

//设置上传大小 这里设置10M
upload.limits={fileSize: 1024 * 1024 * 10};

//单文件
app.post('/upload1', upload.single("file1"), function (req, res) {
    console.log(req.file);
    res.send(req.file);
    res.end();
});

//多文件
app.post('/upload2', upload.array("file2", 3), function (req, res) {
    console.log(req.files);
    res.send(req.files);
    res.end();
});

// 如果因为上面三种方式的fieldname值要跟input的name要一样，用any可以不约定这个name值
app.post('/upload3', upload.any(), function (req, res) {
    console.log(req.files);
    res.send(req.files);
    res.end();
});

// express错误处理，需要放在其他app.use() 和路由调用后
app.use(function(err,req,res,next){
    if(err){
        console.log('出错了');
        res.send(err);
        res.end();
    }
});

app.listen(3000);
