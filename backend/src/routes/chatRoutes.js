const router = require('express').Router()

const chatRoutes = (controller) => {
    router
    .get('/', controller.getUserChat)
    .get('/listar', controller.getAllChats)
    .post('/', controller.newMessage)

    return router
}

module.exports = chatRoutes