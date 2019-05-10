const express = require('express');
const userRouter = express.Router();
const { login } = require('./user.service');

userRouter.post('/login', login);

module.exports = userRouter;