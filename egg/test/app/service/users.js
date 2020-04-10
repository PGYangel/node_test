'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    const dataObj = {
      list: [
        { id: 1, title: '标题', detail: '内容s' },
        { id: 2, title: '标题', detail: '内容s' },
        { id: 3, title: '标题', detail: '内容s' },
        { id: 4, title: '标题', detail: '内容s' },
      ],
    };
    return dataObj.list;
  }
}

module.exports = NewsService;
