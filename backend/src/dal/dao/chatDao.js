const chatDao = (model) => ({
    async getChat(userId) {
        const chat = model.findById(userId, 'chat')
        //console.log(chat) //prints Query, but the front's getting the user._id and the array of msgs
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
        const chats = await model.find(null, 'email chat') //Probar si así me trae el mail y chat de todos los usuarios
        return chats
    }
})

module.exports = chatDao