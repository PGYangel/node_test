'use strict';

module.exports = app => {
  const { router, controller, config } = app;
  // 设置路由跨域
  const cors = app.middleware.cors(config, 1);
  /**
     * @swagger
     * /:
     *   get:
     *     tags:
     *       - TestAPI
     *     description: 网站管理系统API请求测试
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
  router.get('/', cors, controller.home.index);
  router.get('/swagger.json', controller.home.swagger);
};
