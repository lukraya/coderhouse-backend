//INICIALIZACIÓN DEL SERVIDOR
const {PORT} = require('./config/globals')
const {getConnection} = require('./dao/db/connection')
const app = require('./server')

getConnection().then((message)=>{
    console.log(message)
    app.listen(PORT, ()=>{
        console.log(`Listening on port: ${PORT}`)
    })
}).catch(console.log)