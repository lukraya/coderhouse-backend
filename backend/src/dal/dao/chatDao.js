const chatDao = (model) => ({
    async getChat(userId) {
        const { chat } = model.findById(userId, 'chat')
        return chat
    },

    async addMessage(userId, msg) {
        const user = await model.findById(userId)            
        user.chat.push(msg)
        await user.save((err)=>{
            if (err) console.log(`error saving doc`)
        })
        return user.chat
    },
    
    async getAll() {
        const chats = await model.find(null, 'email chat') //Probar si así me trae el mail y chat de todos los usuarios
        return chats
    }
})

module.exports = chatDao