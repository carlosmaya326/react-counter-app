// Desestructuración
const persona = {
	nombre: "Tony",
	edad: 45,
	clave: "Ironman"
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornarUsuario = ({clave, nombre, edad, rango = "Capitan"}) => {
	// console.log(nombre, edad, rango);

	return {
		nombreClave: clave,
		anios: edad,
		latlng: {
			lat: 14.5425,
			lng: 15.4587
		}
	}
}

const avenger = retornarUsuario(persona);

const {nombreClave, anios, latlng: {lat, lng}} = avenger;
console.log(nombreClave, anios);
console.log(lat, lng);