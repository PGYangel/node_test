const express = require('express');
const router = express.Router();
//所有路由都经过这个js进行整合
const login = require('./login.js');
const goods = require('./goods.js');

router.use('/login', login);
router.use('/goods', goods);

module.exports = router;
