var express=require('express');
var app=express();
var http = require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){
    res.send('<h1>进入sockio服务</h1>');
});

io.on('connection',function(socket){
    console.log('一个用户进入socket');

    // 用户断开（关闭页面、刷新页面、触发退出事件都会视为断开），disconnect是固定的
    socket.on('disconnect',function(){
        console.log('一个用户断开')
    });

    // “post msg”这是自定义的事件名称，可自由编写，客户端使用相同名称即可。
    // 下面这段是接收发送的消息
    socket.on('post msg',function(msg){
        console.log('msg:'+ msg);

        // 广播内容，Socket.IO 提供了 io.emit 方法
        // 要将消息发给除特定 socket 外的其他用户，可以用 broadcast 标志：socket.broadcast.emit()
        // 将接收到的信息广播给所有用户
        io.emit('spread msg',msg);
    });
});

http.listen(3000,function(){
    console.log('socket服务开启')
});
