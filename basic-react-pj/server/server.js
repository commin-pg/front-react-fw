const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// localhost 포트 설정
const port = 4002;

const app = express();

// server instance
const server = http.createServer(app);

// socketio 생성후 서버 인스턴스 사용
const io = socketIO(server);

io.on('connection', socket => {
    console.log('User connected');
    socket.on('disconnect', () => {
        console.log('User disconnect');
    });
});

io.on('connection', socket => {
    socket.on('send message', (item) => {
        const msg = item.name + ' : ' + item.message;
        console.log(msg);
        io.emit('receive message', { name: item.name, message: item.message });
    });
    socket.on('disconnect', function () {
        console.log('user disconnected: ', socket.id);
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`))
