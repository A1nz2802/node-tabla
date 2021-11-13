const multiplicar = async( base, altura ) => {
	try {
		let salida = '';	
		for (let i = 1; i <= altura ; i++) { 
 			salida += `${base} x ${i} = ${base*i}\n`;
		}
		
		return salida;
	} catch (err) {
		throw err;
	}

}

module.exports = {
	multiplicar
}
