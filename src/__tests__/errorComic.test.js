import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ErrComic from '../components/errorescomponent/errorcomic';

test('<ErrComic/> , prueba de existencia de elementos', () => {
	const wrapper = render(
		<BrowserRouter>
			<ErrComic />
		</BrowserRouter>
	);
	wrapper.debug();
	const h1 = screen.getByTestId('titulo');
	expect(h1.tagName).toBe('H1');
	expect(h1.tagName).not.toBe('SPAN', 'H2', 'H3', 'H4', 'P');
	expect(h1).toHaveTextContent('Comic no encontrado');
	expect(h1).toBeInTheDocument();

	const h2 = screen.getByTestId('titulo2');
	expect(h2.tagName).toBe('H2');
	expect(h2.tagName).not.toBe('SPAN', 'H1', 'H3', 'H4', 'P', 'INPUT');
	expect(h2).toHaveTextContent(
		'Tal vez no exista o no se encuentre en este personaje'
	);
	expect(h2).toBeInTheDocument();
	const h3 = screen.getByTestId('titulo3');
	expect(h3.tagName).toBe('H3');
	expect(h3.tagName).not.toBe('SPAN', 'H1', 'H2', 'H4', 'P', 'INPUT');
	expect(h3).toHaveTextContent('O thanos lo habrá con guantelete del infinito');
	expect(h3).toBeInTheDocument();

	const p = screen.getByTestId('parrafo');
	expect(p.tagName).toBe('P');
	expect(p.tagName).not.toBe('SPAN', 'H1', 'H2', 'H3', 'H4', 'INPUT');
	expect(p.textContent).toBe(
		'• Por favor haz click sobre para volver o en el logo para volver a los personajes'
	);
	expect(p).toBeInTheDocument();

	const p2 = screen.getByTestId('parrafo2');
	expect(p2.tagName).toBe('P');
	expect(p2.tagName).not.toBe('SPAN', 'H1', 'H2', 'H3', 'H4', 'INPUT');
	expect(p2.textContent).toBe(
		'• Sino borrar la palabra del buscador y volveras a los comics que elegiste'
	);
	expect(p2).toBeInTheDocument();

	const img = screen.getByTestId('img');
	expect(img.tagName).toBe('IMG');
	expect(img.tagName).not.toBe('SPAN', 'I', 'INPUT');
	expect(img).toBeInTheDocument();
	const errComic = renderer
		.create(
			<BrowserRouter>
				<ErrComic />
			</BrowserRouter>
		)
		.toJSON();

	expect(errComic).toMatchSnapshot();
});
