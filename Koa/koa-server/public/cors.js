/**
 * 跨域配置
 */

const cors = require('koa2-cors'),
    corsList = require('./config').corsList,
    corsObj = {};
//设置允许跨域域名
corsObj.origin = (ctx) => {
    if (ctx.header.referer && corsList.length > 0) {
        let referer = ctx.header.referer.substr(0, ctx.header.referer.length - 1)
        var corsHost = corsList.find((val) => val === referer)
        if (corsHost) {
            return corsHost;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

//设置跨域请求类型
corsObj.allowMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
//设置服务器支持的所有头信息字段
corsObj.allowHeaders = ['Content-Type', 'Authorization', 'Accept'];
//设置获取其他自定义字段
//corsObj.exposeHeaders = ['WWW-Authenticate', 'Server-Authorization'];

module.exports = cors(corsObj)
