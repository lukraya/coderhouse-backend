const chatController = (service) => ({
    async getUserChat(req, res) {
        const result = await service.getUserChat(req.user._id)
        res.json(result)
    },

    async getSelectedChat(req, res) {
        const {params: {email}} = req
        const result = await service.getSelectedChat(email)
        res.json(result)
    },

    async newMessage(req, res) {
        const { msg, email } = req.body
        const result = await service.newMessage(email, msg)
        res.json(result)
    },

    async getAllChats(req, res) {
        const result = await service.getAllChats()
        res.json(result)
    }
})

module.exports = chatController