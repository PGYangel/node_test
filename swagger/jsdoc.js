const swaggerJSDoc = require('swagger-jsdoc');
// swagger definition
const swaggerDefinition = {
    info: {
        title: 'swagger文档测试',
        version: '1.0.0',
        description: '内容简介区域',
    },
    host: 'localhost:3000',
    basePath: '/',
};
// initialize swagger-jsdoc
module.exports = function () {
    // options for the swagger docs
    const options = {
        // import swaggerDefinitions
        swaggerDefinition: swaggerDefinition,
        // 该路径下的所有js对应注释进行api文档生成
        apis: ['./routes/*.js'],
    };
    return swaggerJSDoc(options)
};
