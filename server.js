const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Server-Sent Events (SSE) endpoint
app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Send a welcome message
    res.write(`data: Welcome to the chat!\n\n`);

    // Listen for new messages
    io.on('message-sent', (msg) => {
        res.write(`data: ${JSON.stringify(msg)}\n\n`);
    });

    // When the client disconnects
    req.on('close', () => {
        res.end();
    });
});

// Socket
io.on('connection', (socket) => {
    console.log('Connected...');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);

        // Emit an event when a message is sent to trigger SSE
        io.emit('message-sent', msg);
    });
});