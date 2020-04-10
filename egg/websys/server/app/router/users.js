'use strict';

module.exports = app => {
  const { router, controller, config } = app;
  const cors = app.middleware.cors(config);

  router.post('/users/login', cors, controller.users.login);

  router.post('/users/checkToken', cors, controller.users.checkToken);
};
