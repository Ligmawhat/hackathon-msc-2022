require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Token, Sequelize } = require("../db/models");
const userService = require("./user-service");

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { userId: userId } });
    if (tokenData) {
      await tokenData.update(
        { refreshToken: refreshToken },
        { where: { userId: userId }, returning: true, plain: true }
      ); //  применить метод перезаписи поля у модели токен
      return tokenData;
    }
    await Token.create({
      userId: userId,
      refreshToken: refreshToken,
    });
    const tokenRes = await Token.findOne({ where: { userId: userId } });
    return tokenRes;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({
      where: { refreshToken: refreshToken },
    }); // удалить запись из бд
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({
      where: { refreshToken: refreshToken },
    }); // удалить запись из бд
    return tokenData;
  }
}

module.exports = new TokenService();
