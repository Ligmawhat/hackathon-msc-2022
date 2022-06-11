const { Chat, User, Message, Sequelize } = require("../db/models");

class ChatService {
  async send(message, chatId, userId) {
    const user = await User.findOne({
      where: { id: userId },
    });

    await Message.create({ 
      message,
      chatId,
      owner: user.name,
     })

    const chat = await Chat.findOne({
      where: { id: chatId },
      include: [
        {
          model: Message,
        },
      ],
    });

    return chat
  }

  async create(typeOfChat, arrOfUsers) {
    const chat = await Chat.create({
      type: typeOfChat,
      userList: arrOfUsers
    });
    return chat
  }

  async give(chatId = null, arrayOfUsers = []) {
    if(chatId == null)
      await Chat.create('privat', arrayOfUsers)

    const chat = await User.findOne({
      where: { type: typeOfChat },
    });

    return chat
  }

  async delete(message, userId) {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw ApiError.BadRequest("user ne naiden");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Incorrect pass");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new ChatService();
