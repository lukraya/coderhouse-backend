const { SESSION_SECRET, MONGO_URI } = require('./config/globals')

//CONFIG DEL SERVIDOR
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)

const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  })
const { chatService } = require('./services')

//db
const MongoStore = require('connect-mongo')
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true}

//Authentication
const passport = require('passport')
const session = require("express-session")
require('./auth/passportLocal')

//Require middlewares
const cookieParser = require('cookie-parser')
const cors = require('cors')
const compression = require('compression')

//Middleware session
app.use(
    session({
        store: MongoStore.create({
            mongoUrl: MONGO_URI,
            mongoOptions,
        }),
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        rolling: true,
        cookie: {
            maxAge: 600 * 1000
        }
    })
)

//Cors config
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 200
}

//Setting middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(compression())

const router = require('./routes')
app.use(router)


io.on('connection', async (socket) => {
    const userEmail = socket.handshake.query.userEmail
    console.log('userEmail', userEmail)
    socket.join(userEmail)
    let messages = await chatService.getSelectedChat(userEmail)
    console.log(messages)
    socket.emit('messages', {messages})
  
    socket.on('new-message', ({ msg, email }) => {
      console.log('msg', msg)
      chatService.newMessage(email, msg)
      messages = chatService.getSelectedChat(email)
      socket.broadcast.to(userEmail).emit('messages', {messages})
    })
})


module.exports = server