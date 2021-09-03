import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
	test('getUser debe retornar un objeto', () => {
		const userTest = {
			uid: "ABC123",
			username: "Pepe123"
		};
		const user = getUser();

		expect(user).toEqual(userTest);
	});

	test('getUsuarioActivo debe retornar un objeto', () => {
		const nombre = 'Juan';
		const user = getUsuarioActivo(nombre);

		expect(user).toEqual({
			uid: "ABC123",
			username: nombre
		});
	});
});