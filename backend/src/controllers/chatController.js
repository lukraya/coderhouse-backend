const chatController = (service) => ({
    async getUserChat(req, res, next) {
        const result = await service.getUserChat(req.user._id)
        //console.log(result)
        res.json(result) //debería ser el array de msjs correspondientes
    },

    async newMessage(req, res, next) {
        const { msg, userId } = req.body
        const result = await service.newMessage(userId, msg)
        res.json(result) //envío el array actualizado
    },

    async getAllChats(req, res, next) {
        const result = await service.getAllChats()
        res.json(result)
    }
})

module.exports = chatController