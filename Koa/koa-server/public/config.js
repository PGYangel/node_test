/**
 * 配置文件信息
 * */
const config ={
    //允许跨域访问域名
    corsList:[
        'http://webc.yr.dev.q1.com'
    ],
    //数据库链接
    connections:{
        mysql:{
            host:'localhost',
            port: 3306,
            user:'root',
            password:'abc123',
            database:'websystem'
        },
        //mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
        mongodb:'mongodb://localhost:27017/'
    }
};

module.exports = config;
