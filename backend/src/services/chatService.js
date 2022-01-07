const chatService = (dao) => ({
    async getUserChat(userId) {
        const chat = await dao.getChat(userId)
        return chat
    },

    async newMessage(userId, msg) {
        const { sender } = msg
        if (sender === 'admin') {
            msg.type = 'sistema'
        } else {
            msg.type = 'usuario'
        }

        const chat = await dao.addMessage(userId, msg)
        return chat
    },
    
    async getAllChats() {
        const chats = await dao.getAll()
        return chats
    }
})

module.exports = chatService