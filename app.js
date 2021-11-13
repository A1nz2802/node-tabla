const { multiplicar } = require('./helpers/multiplicar');
const { listar } = require('./helpers/listar');
const { crearArchivo } = require('./helpers/crearArchivo');
const colors = require('colors');

const argv = require('./config/yargs');

const main = async( base, list, altura ) => {
	try {
		console.clear();
		const salida = await multiplicar( base, altura );
		if ( list ) {
			await listar( base, salida );
		}

		const mensaje = await crearArchivo( base, salida ); 
		return mensaje;

	}	catch (err) {
		throw err;
	}
}

main( argv.b, argv.l, argv.h )
	.then( mensaje => console.log( mensaje.green ) )
	.catch( err => console.log( err.red ) )


