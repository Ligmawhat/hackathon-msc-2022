// const {
//   SEND_MESSAGE_SOCKET,
//   GIVE_CHAT_SOCKET,
//   CREATE_CHAT_SOCKET,
// } = require('../constants/event');
// const myEmitter = require('../ee');
//
// function registerWsEmitter(map) {
//   myEmitter.on(SEND_MESSAGE_SOCKET, (message, listOfUsers) => {
//     for (let [id, userConnect] of map) {
//       listOfUsers.map((user) => {
//         if (user.id == id) {
//           userConnect.send(
//             JSON.stringify({
//               type: SEND_MESSAGE_SOCKET,
//               payload: {
//                 context: message.context,
//                 name: message.name,
//                 data: message.data,
//               },
//             })
//           );
//         }
//       });
//     }
//   });
//
//   // myEmitter.on(GIVE_CHAT_SOCKET, (message, listOfUsers) => {
//   //   for (let [id, userConnect] of map) {
//   //     listOfUsers.map((user) => {
//   //       if (user.id == id) {
//   //         userConnect.send(
//   //           JSON.stringify({
//   //             type: GIVE_CHAT_SOCKET,
//   //             payload: {
//   //               message,
//   //               name: user.name,
//   //             },
//   //           })
//   //         );
//   //       }
//   //     });
//   //   }
//   // });
//
//   // myEmitter.on(CREATE_CHAT_SOCKET, (message, userName) => {
//   //   for (let [id, userConnect] of map) {
//   //     userConnect.send(
//   //       JSON.stringify({
//   //         type: CREATE_CHAT_SOCKET,
//   //         payload: {
//   //           message,
//   //           name: userName,
//   //         },
//   //       })
//   //     );
//   //   }
//   // });
// }
// module.exports = registerWsEmitter;
