const router = require('express').Router()

const chatRoutes = (controller) => {
    router
    .get('/', controller.getUserChat)
    .get('/listar', controller.getAllChats)
    .post('/', constroller.newMessage)

    return router
}

module.exports = chatRoutes