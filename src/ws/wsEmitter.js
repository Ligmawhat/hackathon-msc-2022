const {
  PRIVATE_MESSAGE_SOCKET,
  GROUP_MESSAGE_SOCKET,
  GLOBAL_MESSAGE_SOCKET,
} = require('../constants/event');
const myEmitter = require('../ee');

function registerWsEmitter(map) {
  myEmitter.on(PRIVATE_MESSAGE_SOCKET, (message, friendId) => {
    for (let [id, userConnect] of map) {
      if (id === friendId)
        userConnect.send(
          JSON.stringify({
            type: PRIVATE_MESSAGE_SOCKET,
            payload: message,
          })
        );
    }
  });

  myEmitter.on(GROUP_MESSAGE_SOCKET, (message, listOfUsers) => {
    
    for (let [id, userConnect] of map) {
      listOfUsers.map((user) => {
        if (user.id == id) {
          userConnect.send(
            JSON.stringify({
              type: GROUP_MESSAGE_SOCKET,
              payload: {
                message,
                name: user.name,
              },
            })
          );
        }
      });
    }
  });

  myEmitter.on(GLOBAL_MESSAGE_SOCKET, (message, userName) => {
    for (let [id, userConnect] of map) {
      userConnect.send(
        JSON.stringify({
          type: GET_GAME_USERS_SOCKET,
          payload: {
            message,
            name: userName,
          },
        })
      );
    }
  });
}
module.exports = registerWsEmitter;
