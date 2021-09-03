// Funciones en JS
const saludar = function(nombre) {
	return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
	return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

// console.log(saludar("Goku"));
// console.log(saludar2("Vegeta"));
// console.log(saludar3("Gohan"));

export const getUser = () => {
	return {
		uid: "ABC123",
		username: "Pepe123"
	}
}

// console.log(getUser());

// Retorno de objeto implicito
export const getUsuarioActivo = (nombre) => ({
	uid: "ABC123",
	username: nombre
});

const usuarioActivo = getUsuarioActivo("Juan");
// console.log(usuarioActivo);