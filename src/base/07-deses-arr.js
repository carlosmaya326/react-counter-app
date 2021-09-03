// Desestructuración arreglos
const personajes = ["Goku", "Vegeta", "Gohan"];

const [,, gohan] = personajes;

// console.log(gohan)

export const retornaArreglo = () => {
	return ["ABC", 123];
}

const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

// const usarEstado = (valor) => {
// 	return [ valor, () => { console.log("Hola Mundo") } ];
// }

// const [nombre, setNombre] = usarEstado("Goku");

// console.log(nombre);
// setNombre();