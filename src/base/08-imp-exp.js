import { heroes, owners } from "../data/heroes";

const getHeroeById = (id) => {
	return heroes.find((heroe) => heroe.id === id);
}

// console.log(owners)
// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => {
	return heroes.filter((heroe) => heroe.owner === owner);
}

// console.log(getHeroesByOwner("DC"));
// console.log(getHeroesByOwner("Marvel"));

export {
	getHeroeById,
	getHeroesByOwner
}