const ChatService = require('../service/chat-service');
const myEmitter = require('../src/ee');
const {
  PRIVATE_MESSAGE_SOCKET,
  GROUP_MESSAGE_SOCKET,
  GLOBAL_MESSAGE_SOCKET,
} = require('../src/constants/event');

class ChatController {
  async sendMessage(req, res, next) {
    try {
      // const { message, chatId, userId } = req.body;
      // const chatData = await ChatService.send(message, chatId, userId);
      // const chat = await Chat.findOne({ where: { id: chatId } })

      // if (chat.typeOfChat === 'privat')
        myEmitter.emit(PRIVATE_MESSAGE_SOCKET, message, userId);
      // else if (chat.typeOfChat === 'group')
      //   myEmitter.emit(GROUP_MESSAGE_SOCKET, message, listOfUsers);
      // else if (chat.typeOfChat === 'global')
      //   myEmitter.emit(GLOBAL_MESSAGE_SOCKET, message, req.session.user.name);
      
      return res.json(chatData);
    } catch (error) {
      next(error);
    }
  }

  async giveChat(req, res, next) {
    try {
      const { chatId, arrayOfUsers } = req.body;
      const chat = await ChatService.give(chatId, arrayOfUsers);
      res.json(chat);
    } catch (error) {}
  }

  async createChat(req, res, next) {
    try {
      const { typeOfChat, arrOfUsers } = req.body;
      const chat = await ChatService.create(typeOfChat, arrOfUsers);
      res.json(chat);
    } catch (error) {}
  }

  async delete(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await ChatService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      req.session.user.id = userData.id;
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ChatController();
