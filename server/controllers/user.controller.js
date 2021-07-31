const userService = require('../services/user.service');
const userModel = require('../models/user.model');


class UserController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
      res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {

    } catch (error) {
      next(error);
    }
  }

  async loguot(req, res, next) {
    try {

    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {

    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {

    } catch (error) {
      next(error);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userModel.find({});
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
