const ChatService = require('../service/chat-service');
const myEmitter = require('../src/ee');
const {
  SEND_MESSAGE_SOCKET,
  GIVE_CHAT_SOCKET,
  CREATE_CHAT_SOCKET,
} = require('../src/constants/event');

class ChatController {
  async sendMessage(req, res, next) {
    try {
      const { content, chat_id, user_id } = req.body;
      const chatData = await ChatService.send(content, chat_id, user_id);
      const listOfUsers = await ChatService.giveListOfUsers(chat_id);

      myEmitter.emit(SEND_MESSAGE_SOCKET, chatData, listOfUsers);

      return res.json(chatData);
    } catch (error) {
      next(error);
    }
  }

  async giveChat(req, res, next) {
    try {
      const { chat_id } = req.body;
      const chat = await ChatService.give(chat_id);
      res.json(chat);
    } catch (error) {}
  }

  async createChat(req, res, next) {
    try {
      const { typeOfChat, initiator_id } = req.body;
      const chat = await ChatService.create(typeOfChat, initiator_id);
      res.json(chat);
    } catch (error) {}
  }

  async close(req, res, next) {
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
