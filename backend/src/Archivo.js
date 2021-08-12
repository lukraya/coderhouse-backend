const fs = require('fs');

//const ruta = "./productos.txt";
//const encode = 'utf-8';

module.exports = class Archivo {
    constructor(rutaArchivo) {
        this.archivo = rutaArchivo;
    }

    async leer() {
        try {
            const contenido = await fs.promises.readFile(this.archivo);
            //console.log(`Log A14 ${contenido}`);
            //console.log(`Log A15 ${JSON.parse(contenido)}`);
            //return JSON.parse(contenido)
            return contenido
        }
        catch(error) {
            console.log(`No se pudo leer. Error: ${error}`)
        }
    }

    async guardar(/* elemento, */ array) {
        //const productos = await this.leer();
        //nuevoProd.id = productos.length + 1;
        //productos.push(nuevoProd);
        try {            
            await fs.promises.writeFile(this.archivo, JSON.stringify(array, null, "\t"));
            console.log("Guardado.")
        }
        catch(error) {
            console.log("No se pudo guardar el archivo.", error)
        }

    }

    async borrar() {
        try {
            fs.promises.unlink(this.archivo)
        }
        catch(error) {
            console.log("Error al borrar el archivo", error)
        }
    }
}