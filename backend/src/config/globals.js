const dotenv = require('dotenv')
const path = require('path')
dotenv.config({
    path: path.resolve('./', process.env.NODE_ENV.trim() + '.env')
})

module.exports = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || "development",
    MONGO_URI: process.env.MONGO_URI || "",
    SESSION_SECRET: process.env.SESSION_SECRET || "secret",
    SESSION_EXPIRATION: process.env.SESSION_EXPIRATION || 600,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    PASS_GMAIL: process.env.PASS_GMAIL,
    USER_GMAIL: process.env.USER_GMAIL,
    ADMIN_PHONE: process.env.ADMIN_PHONE
}