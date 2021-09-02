import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-exp";
// Promesas

// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const heroe = getHeroeById(2);
// 		resolve(heroe);
// 	}, 2000);
// });

// promesa.then((heroe) => {
// 	console.log(heroe)
// })
// .catch((err) => {
// 	console.log(err)
// });

const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const heroe = getHeroeById(id);
			if (heroe) {
				resolve(heroe);
			} else {
				reject("No se encontró el heroe");
			}
		}, 2000);
	});
}

getHeroeByIdAsync(4).then((heroe) => {
	console.log(heroe)
}).catch((err) => {
	console.warn(err)
});