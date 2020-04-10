'use strict';

const Controller = require('egg').Controller;

class ProjectsController extends Controller {
  // 获取项目列表
  async getList() {
    const { ctx } = this;
    console.log(ctx.cookies.get('test'));
    const resule = await ctx.service.projects.getList();
    ctx.body = resule;
  }
}

module.exports = ProjectsController;
