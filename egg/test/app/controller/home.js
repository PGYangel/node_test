'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async news() {
    const dataObj = {
      list: [
        { id: 1, title: '标题', detail: '内容' },
        { id: 2, title: '标题', detail: '内容' },
        { id: 3, title: '标题', detail: '内容' },
        { id: 4, title: '标题', detail: '内容' },
      ],
    };
    this.ctx.body = dataObj;
  }

  async userList() {
    const list = await this.ctx.service.users.list();
    this.ctx.body = list;
  }

}

module.exports = HomeController;
