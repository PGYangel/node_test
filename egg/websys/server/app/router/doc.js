'use strict';

module.exports = app => {
  const { router, controller, config } = app;
  const cors = app.middleware.cors(config);
  const cors2 = app.middleware.cors(config, 1);

  /**
     * @swagger
     * definition:
     *  docAdd:
     *   properties:
     *    title:
     *     type: string
     *     description: 标题
     *    url:
     *     type: string
     *     description: 活动url
     * /doc/add:
     *   post:
     *     tags:
     *       - Doc
     *     description: 新增文案项
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: from
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/docAdd'
     *     responses:
     *       200:
     *         description: success
     */
  router.post('/doc/add', cors, controller.doc.add);
  /**
     * @swagger
     * /doc/list:
     *   get:
     *     tags:
     *       - Doc
     *     description: 获取文案管理项列表
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
  router.get('/doc/list', cors, controller.doc.getList);
  /**
     * @swagger
     * /doc/getDataForId:
     *   get:
     *     tags:
     *       - Doc
     *     description: 根据ID获取文案管理内容
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
  router.get('/doc/getDataForId', cors, controller.doc.getDataForId);

  router.post('/doc/uploadImg', cors, controller.doc.uploadImg);

  router.post('/doc/modifData', cors, controller.doc.modifData);

  router.post('/doc/delData', cors, controller.doc.delData);

  router.get('/doc/getDetail/:id', cors2, controller.doc.getDetailForId);

};
