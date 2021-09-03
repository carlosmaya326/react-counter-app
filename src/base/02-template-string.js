const nombre = 'Juan';
const apellido = 'Maya';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = 'Carlos') {
	return 'Hola ' + nombre;
}

// console.log(`Esta es un texto: ${ getSaludo(nombreCompleto) }`)