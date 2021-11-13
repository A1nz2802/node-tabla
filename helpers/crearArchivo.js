// importando el manejador de archivos de node
const fs = require('fs');

const crearArchivo = async( base, salida ) => {
		
	try {

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		// return
		return `tabla-${base}.txt creado correctamente!`;
	} catch (err) {
		throw err;
	}
}

module.exports = {
	// crearArchivo = crearArchivo
	crearArchivo
}

