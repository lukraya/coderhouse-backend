const chatController = (service) => ({
    async getUserChat(req, res, next) {
        const result = await service.getUserChat(req.user._id)
        //console.log(result)
        res.json(result) //debería ser el array de msjs correspondientes
    },

    async getSelectedChat(req, res, next) {
        const {params: {email}} = req
        const result = await service.getSelectedChat(email)
        res.json(result)
    },

    async newMessage(req, res, next) {
        const { msg, email } = req.body
        const result = await service.newMessage(email, msg)
        res.json(result) //envío el array actualizado
    },

    async getAllChats(req, res, next) {
        const result = await service.getAllChats()
        res.json(result)
    }
})

module.exports = chatController