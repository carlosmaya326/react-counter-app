const persona = {
	nombre: 'Juan',
	apellido: 'Maya',
	edad: 22,
	direccion: {
		ciudad: 'Dosquebradas',
	}
};

// console.table(persona)
console.log(persona)

const persona2 = { ...persona };
persona2.nombre = 'Carlos';

console.log(persona2)