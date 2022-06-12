const { Company, Sequelize } = require("../../db/models")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const mailService = require("../mail-service")
const tokenService = require("./company-token-service")
const CompanyDto = require("../../dtos/company-dto")
const ApiError = require("../../exceptions/api-error")

class CompanyService {
  async registration(email, password) {
    const candidate = await Company.findOne({
      where: { email: email },
    })
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь существует`)
    }
    const hashPassword = await bcrypt.hash(password, 3)
    // const activationLink = uuid.v4();
    // await User.create({ email, password: hashPassword, activationLink });
    await Company.create({ email: email, password: hashPassword, isActivated: true })
    const createdCompany = await Company.findOne({ where: { email: email } })
    const companyDto = new CompanyDto(createdCompany) // id email isActivated
    // await mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/api/activate/${activationLink}`
    // );
    const tokens = tokenService.generateToken({ ...companyDto })
    await tokenService.saveToken(companyDto.id, tokens.refreshToken)
    return {
      ...tokens,
      user: companyDto,
    }
  }

  async activate(activationLink) {
    const company = await Company.findOne({
      where: { activationLink: activationLink },
    })
    if (!company) {
      throw ApiError.BadRequest("Неккоректная ссылка активации")
    }
    await company.update(
      {
        isActivated: true,
      },
      { where: { activationLink: activationLink } },
    )
  }

  async login(email, password) {
    const user = await Company.findOne({ where: { email: email } })
    if (!user) {
      throw ApiError.BadRequest("user ne naiden")
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest("Incorrect pass")
    }
    const companyDto = new CompanyDto(user)
    const tokens = tokenService.generateToken({ ...companyDto })
    await tokenService.saveToken(companyDto.id, tokens.refreshToken)
    return {
      ...tokens,
      user: companyDto,
    }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await tokenService.findToken(refreshToken)
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError()
    }
    const user = await Company.findByPk(userData.id)
    const userDto = new CompanyDto(user)
    const tokens = tokenService.generateToken({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)
    return { ...tokens, user: userDto }
  }
}

module.exports = new CompanyService()
