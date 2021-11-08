const userModel = require('../dao/models/user')

module.exports = class {
    async createUser (user) {
        await userModel.create(user)
    }
}