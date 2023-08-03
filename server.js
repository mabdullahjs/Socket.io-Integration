const express = require('express');
const http = require('http');
const path = require('path');
const {Server} = require('socket.io');

//server listening
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//socket io connection
io.on("connection" , (socket)=>{
    socket.on("user-message" , (message)=>{
        io.emit("message" , message);
    })
})


//routes
app.use(express.static(path.resolve("./public")));

app.get('/' , (req , res)=>{
    return res.send('/public/index.html');
})

//server listening
server.listen(5000 , ()=>{
    console.log('Server is listening on port 5000');
})