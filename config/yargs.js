const argv = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',
		default: 5,
		demandOption: true,
		describe: 'Es la base de la tabla de multiplicar'
	})

	.option('l', {
		alias: 'list',
		type: 'boolean',
		default: false,
		describe: 'Muestra la tabla en consola'
	})

	.option('h', {
		alias: 'altura',
		type: 'number',
		default: 12,
		describe: 'Altura de la tabla de multiplicar'
	})

	.check(( argv, options ) => {
		if ( isNaN( argv.b ) || isNaN( argv.h ) ) {
			throw 'Debe ser un número.';
		}
			return true;
	})
	
	.argv;

module.exports = argv;
