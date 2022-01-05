const nodemailer = require('nodemailer')
const { PASS_GMAIL, USER_GMAIL, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, ADMIN_PHONE} = require('../config/globals')
const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

const transporterGmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: USER_GMAIL,
        pass: PASS_GMAIL
    },
    tls: {
        rejectUnauthorized: false
    }
})

const sendMailSignup = async (user)=>{
    await transporterGmail.sendMail({
        from: 'Alerta de servidor',
        to: USER_GMAIL,
        subject: `Nuevo registro`,
        html: `<h2>Información de nuevo usuario</h2>
            <img src="${user.avatar}">
            <ul>
                <li>Nombre: ${user.name}</li>
                <li>Edad: ${user.age}</li>
                <li>Dirección: ${user.address}</li>
                <li>Celular: ${user.cellphone}</li>
                <li>Email: ${user.email}</li>
            </ul>`,
        attachments: [{
            path: user.avatar,
            filename: "profilePic.jpeg",
            contentType: "image/jpeg"
        }]
    })
}

const sendMailOrder = async (name, email, total, products)=>{
    try {
        await transporterGmail.sendMail({
            from: 'Alerta de servidor',
            to: USER_GMAIL,
            subject: `Nuevo pedido de ${name} (${email})`,
            html: `<h3>Detalle de compra: </h3>
                <p>Valor total: ${total}</p>
                <ul>Productos: 
                    ${JSON.stringify(products)}
                </ul>    
            `,
        })
        console.log('mail enviado')
    } catch (error) {
        console.log(`Error al enviar mail: ${error}`)
    }
}

const sendSmsOrder = async (phone)=>{
    try {
        await twilioClient.messages.create({
            body: `Su pedido ha sido recibido y se encuentra en proceso.`,
            from: '+13203387865',
            to: ADMIN_PHONE //phone
        })
        console.log('mensaje enviado')
    } catch (error) {
        console.log(`Error al enviar sms: ${error}`)
    }
}


const notificationService = () => ({
    //Alert admin of new sign up via gmail
    async alertNewUser (userData) {
        try {
            await sendMailSignup(userData)
        } catch (error) {
            console.log(`Error en alerta por registro: ${error}`)
        }
    },

    //Alert admin of new order via gmail & user via sms
    async alertNewOrder (orderData) {
        const { name, email, cellphone } = orderData.from
        const { total, products } = orderData

        //const prodsHtml = await generateHtml(products)
        
        await sendMailOrder(name, email, total, products)
        await sendSmsOrder(cellphone)        
    },
})

module.exports = notificationService