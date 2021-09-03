import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
	test('getSaludo debe retornar hola Juan', () => {
		const nombre = 'Juan';
		
		const saludo = getSaludo(nombre);

		expect(saludo).toBe('Hola ' + nombre);
	});

	test('getSaludo debe retornar hola Carlos', () => {
		const saludo = getSaludo();

		expect(saludo).toBe('Hola Carlos');
	});
});