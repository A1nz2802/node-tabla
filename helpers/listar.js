const listar = async( base, salida ) => {
	
	try {
		console.log('==================='.trap.cyan);
		console.log(`Tabla del: ${base}`.yellow);
		console.log('==================='.trap.cyan);
		console.log( salida.rainbow );
	} catch (err) {
		throw err;
	}
}

module.exports = {
	listar
}
