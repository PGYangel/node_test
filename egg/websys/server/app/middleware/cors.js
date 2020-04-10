/**
 * 跨域中间件
 * @param:type
 * 为0，只读取系统白名单，type为1，读取网页白名单
 * */
'use strict';

module.exports = (config, type = 0) => {
  return async function cors(ctx, next) {
    let whiteList = [];
    whiteList = whiteList.concat(config.sysWhiteList);
    if (type) {
      whiteList = whiteList.concat(config.webWhiteList);
    }
    if (ctx.header.referer && whiteList.length > 0) {
      const referer = ctx.header.referer.substr(0, ctx.header.referer.length - 1);
      const corsHost = whiteList.find(val => val === referer);
      if (corsHost) {
        ctx.set('Access-Control-Allow-Origin', corsHost);
      }
    }
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    await next();

  };
};

