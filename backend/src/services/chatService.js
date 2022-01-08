const chatService = (dao) => ({
    async getUserChat(userId) {
        const chat = await dao.getChat(userId)
        return chat
    },

    async getSelectedChat(email) {
        const chat = await dao.getSelectedChat(email)
        return chat
    },

    async newMessage(email, msg) {
        const { sender } = msg
        if (sender === 'admin') {
            msg.type = 'sistema'
        } else {
            msg.type = 'usuario'
        }

        const chat = await dao.addMessage(email, msg)
        return chat
    },
    
    async getAllChats() {
        const chats = await dao.getAll()
        return chats
    }
})

module.exports = chatService