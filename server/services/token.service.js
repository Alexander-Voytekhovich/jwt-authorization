const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token.model');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30min'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
    return {
      accessToken,
      refreshToken
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({user: userId});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = tokenModel.create({user: userId, refreshToken});
    return token;
  }

  async validateAccessToken(accessToken) {
    try {
      const tokenData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
      return tokenData;
    } catch (error) {
      return null;
    }
  }

  async validateRereshToken(rereshToken) {
    try {
      const tokenData = jwt.verify(rereshToken, process.env.JWT_REFRESH_SECRET);
      return tokenData;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    const tokenData = tokenModel.findOne({refreshToken});
    return tokenData;
  }

  async removeToken(refreshToken) {
    const tokenData = tokenModel.deleteOne({refreshToken});
    return tokenData;
  }
}

module.exports = new TokenService();
