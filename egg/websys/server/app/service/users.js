'use strict';
const Service = require('egg').Service;

class UsersService extends Service {
  // 用户登录验证
  async login(form) {
    const d = await this.app.mysql.get('users', form);
    const result = {};
    if (d) {
      result.userName = d.userName;
      result.name = d.name;
      result.powers = d.powers;
      result.state = 1;
    } else {
      result.state = 0;
    }
    return result;
  }
  // 添加登录token
  async addToken(data) {
    const result = {};
    try {
      // await this.app.mysql.insert('token_list', {});
      result.state = 1;
    } catch (e) {
      result.state = 0;
    }
    return result;
  }
  // 查找对比token
  async checkToken() {
    const result = {};
    try {
      result.state = 1;
    } catch (e) {
      result.state = 0;
    }
    return result;
  }

}

module.exports = UsersService;
