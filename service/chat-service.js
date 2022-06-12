const { Chat, User, Message, Sequelize } = require('../db/models');

class ChatService {
  async send(content, chat_id, user_id) {
    const message = await Message.create({
      content,
      chat_id,
      user_id,
    });

    const user = await User.findOne({
      where: { id: user_id },
    });

    let chatData = {
      content,
      owner: user.name,
      // date: message.createAt
    };
    return chatData;
  }

  async giveListOfUsers(chat_id) {
    const listOfUsers = await Chat.findOne({
      where: { id: chat_id },
      include: { model: User },
    });
    return listOfUsers;
  }

  async create(typeOfChat, initiator_id) {
    const chat = await Chat.create({
      type: typeOfChat,
      initiator_id,
    });
    return chat;
  }

  async give(chat_id = null, arrayOfUsers = []) {
    if (chat_id == null) await Chat.create('privat', arrayOfUsers);

    const chat = await User.findOne({
      where: { type: typeOfChat },
    });

    return chat;
  }

  async delete(message, userId) {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw ApiError.BadRequest('user ne naiden');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Incorrect pass');
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
