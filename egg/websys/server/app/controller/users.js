'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 用户登录验证
  async login() {
    const { ctx } = this;
    const form = {
      userName: ctx.request.body.userName,
      password: ctx.request.body.password,
    };
    const result = await ctx.service.users.login(form);
    if (result.state) {

      const token = this.app.jwt.sign({
        data: result.userName + new Date().getTime(),
      }, this.app.config.jwt.secret);
      result.token = token;
    }
    this.addToken();
    ctx.body = result;
  }
  // 添加登录token
  async addToken() {
    console.log(1111111);
  }
  // 查找对比token
  async checkToken() {
    const { ctx } = this;
    const result = await ctx.service.users.checkToken();
    ctx.body = result;
  }
}

module.exports = UsersController;
