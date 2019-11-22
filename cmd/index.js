var nodeCmd =require('node-cmd');

/*
* 两种运行命令行方式：
* 1、run
* arguments：command
* 直接执行没有回调操作
*
* 2、get
* arguments：command,callback
* 执行完后进行回调函数操作
* */

function runCmdTest(){
    nodeCmd.get(
        'ipconfig',
        function(err,data,stderr){
            console.log(data)
        }
    );

    nodeCmd.run('ipconfig');
}

runCmdTest();
