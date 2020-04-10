'use strict'

module.exports = app=>{
    const {router,controller,config}=app
    const cors = app.middleware.cors(config)

    /**
     * @swagger
     * /projects/list:
     *   get:
     *     tags:
     *       - Projects
     *     description: 获取项目列表
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     */
    router.get('/projects/list',cors,controller.projects.getList)
}
