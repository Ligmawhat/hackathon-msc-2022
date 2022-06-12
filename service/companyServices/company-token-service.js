require("dotenv").config()
const jwt = require("jsonwebtoken")
const { CompanyToken, Sequelize } = require("../../db/models")
const userService = require("./company-service")

class CompanyTokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "15m",
    })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    })
    return {
      accessToken,
      refreshToken,
    }
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
      return userData
    } catch (e) {
      return null
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
      return userData
    } catch (e) {
      return null
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await CompanyToken.findOne({ where: { company_id: userId } })
    if (tokenData) {
      await tokenData.update(
        { refresh_token: refreshToken },
        { where: { company_id: userId }, returning: true, plain: true },
      ) //  применить метод перезаписи поля у модели токен
      return tokenData
    }
    await CompanyToken.create({
      company_id: userId,
      refresh_token: refreshToken,
    })
    const tokenRes = await CompanyToken.findOne({ where: { company_id: userId } })
    return tokenRes
  }

  async removeToken(refreshToken) {
    const tokenData = await CompanyToken.destroy({
      where: { refresh_token: refreshToken },
    }) // удалить запись из бд
    return tokenData
  }

  async findToken(refreshToken) {
    const tokenData = await CompanyToken.findOne({
      where: { refresh_token: refreshToken },
    }) // удалить запись из бд
    return tokenData
  }
}

module.exports = new CompanyTokenService()
