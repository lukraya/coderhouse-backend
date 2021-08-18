const fs = require('fs')

module.exports = class Archivo {
    constructor(rutaArchivo) {
        this.ruta = rutaArchivo;
    }

    /* async */ leer() {
        try {
            const contenido = fs.readFileSync(this.ruta, 'utf-8')
            return JSON.parse(contenido)
        }
        catch(error) {
            console.log(`No se pudo leer. Error: ${error}`)
        }
    }

    async guardar(array) {
        try {            
            await fs.promises.writeFile(this.ruta, JSON.stringify(array, null, "\t"));
            console.log("Guardado.")
        }
        catch(error) {
            console.log("No se pudo guardar el archivo.", error)
        }

    }

    async borrar() {
        try {
            fs.promises.unlink(this.ruta)
        }
        catch(error) {
            console.log("Error al borrar el archivo", error)
        }
    }
}