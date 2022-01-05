const userDao = (model) => ({
    async create(user) {
        try {
            const newUser = await model.create(user)
            return newUser
        } catch (error) {
            console.log('User creation failed', error)
        }
    },

    async getById(id) {
        try {
            const user = await model.findById(id)
            return user
        } catch (error) {
            console.log('Get user by id failed', error)
        }
    },
})

module.exports = userDao