//INICIALIZACIÓN DEL SERVIDOR
const {PORT} = require('./config/globals')
const {getConnection} = require('./dao/db/connection')
const server = require('./server')

getConnection().then((message)=>{
    console.log(message)
    server.listen(PORT, ()=>{
        if (err) {console.log(err)}
        else {console.log(`Server listening on PORT ${PORT}`)}
    })
}).catch(console.log)