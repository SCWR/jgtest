const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

const client = {}

server.on('connection', (socket) => {
  console.log('客户端已连接');

  setTimeout(() => {
    socket.send(JSON.stringify({
      type: 'chat',
      text: '您好，请问有什么可以帮到您!',
      id: '小助手',
    }))
  }, 100)

  socket.on('message', (message) => {
    console.log('接收到消息：', message);

    // 广播消息到所有连接的客户端
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  socket.on('close', () => {
    console.log('客户端已断开连接');
  });

  socket.on('error', (error) => {
    console.error('WebSocket 错误：', error);
  });
});

console.log('WebSocket 服务器已启动');