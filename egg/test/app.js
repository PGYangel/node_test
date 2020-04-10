module.exports = app => {
  app.once('server', server => {
    console.log('开启服务');
    // websocket
  });
  app.on('error', (err, ctx) => {
    // report error
  });
  app.on('request', ctx => {
    // log receive request
  });
  app.on('response', ctx => {

  });
};
