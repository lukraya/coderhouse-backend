const chatDao = (model) => ({
    async getChat(userId) {
        const chat = model.findById(userId, 'chat')
        return chat
    },

    async getSelectedChat(email) {
        const chat = model.findOne({email: email}, 'chat')
        return chat
    },

    async addMessage(email, msg) {
        const user = await model.findOne({email: email})
        user.chat.push(msg)
        await user.save((err)=>{
            if (err) console.log(`error saving doc`)
        })
        return user.chat
    },
    
    async getAll() {
        const chats = await model.find(null, 'email chat')
        return chats
    }
})

module.exports = chatDao