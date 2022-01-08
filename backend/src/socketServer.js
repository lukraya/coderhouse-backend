/* //const { PORT } = require('./config/globals')
const { chatService } = require('./services')
const server = require('./server')
const { Sever } = require('socket.io')
const io = new Sever(server)
//const io = require('socket.io')(PORT) //might need to set a diff one

io.on('connection', socket => {
  const userEmail = socket.handshake.query.userEmail
  console.log('userEmail', userEmail)
  socket.join(userEmail)
  let messages = chatService.getSelectedChat(userEmail)
  //console.log(messages)
  socket.emit('messages', {messages})

  socket.on('new-message', ({ msg, email }) => {
    console.log('msg', msg)
    chatService.newMessage(email, msg)
    messages = chatService.getSelectedChat(email)
    socket.broadcast.to(userEmail).emit('messages', {messages})

    if (msg.sender === userEmail) {
        //maybe i can do a simple emit and it'll send to just userA/admin, and not userB
        socket.broadcast.to(sender).emit('receive-message', {
            //broadcast.to(this is the room)
            recipients: [recipient, sender], sender, text
    })
    }
    
  })
}) */