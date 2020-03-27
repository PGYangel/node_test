const swaggerJSDoc = require('swagger-jsdoc');
// swagger definition
const swaggerDefinition = {
    info: {
        title: '网站管理系统API',
        version: '1.0.0',
        description: '网站管理系统API',
    },
    host: 'webs.yr.dev.q1.com',
    basePath: '/',
};
// initialize swagger-jsdoc
module.exports = function () {
    // options for the swagger docs
    const options = {
        // import swaggerDefinitions
        swaggerDefinition: swaggerDefinition,
        // 该路径下的所有js对应注释进行api文档生成
        apis: ['./routers/*.js'],
    };
    return swaggerJSDoc(options)
};
