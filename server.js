const io = require('socket.io')({
    cors: {
        origin: "http://localhost:3000",
        credentials: false,

    }
});

io.on('connection', (client) => { //Aqui é onde emitimos "eventos" para o client
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});

const port = 3000;
io.listen(port);
console.log("listening on port", port);