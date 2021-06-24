import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ErrCharacters from '../components/errorescomponent/errorcharacters';

test('<ErrCharacters /> , prueba de existencia de elementos', () => {
	render(<ErrCharacters />);

	const h1 = screen.getByTestId('h1');
	expect(h1.tagName).toBe('H1');
	expect(h1.tagName).not.toBe('SPAN', 'H2', 'H3', 'H4', 'P');
	expect(h1).toHaveTextContent('Personaje no encontrado');
	expect(h1).toBeInTheDocument();

	const h2 = screen.getByTestId('h2');
	expect(h2.tagName).toBe('H2');
	expect(h2.tagName).not.toBe('SPAN', 'H1', 'H3', 'H4', 'P', 'INPUT');
	expect(h2).toHaveTextContent('Tal vez lleve - como por ejemplo : Frog-Man');
	expect(h2).toBeInTheDocument();

	const h3 = screen.getByTestId('h3');
	expect(h3.tagName).toBe('H3');
	expect(h3.tagName).not.toBe('SPAN', 'H1', 'H2', 'H4', 'P', 'INPUT');
	expect(h3).toHaveTextContent('o tal vez no exista el personaje');
	expect(h3).toBeInTheDocument();

	const h4 = screen.getByTestId('h4');
	expect(h4.tagName).toBe('H4');
	expect(h4.tagName).not.toBe('SPAN', 'H1', 'H2', 'H3', 'P', 'INPUT');
	expect(h4).toHaveTextContent(
		'o tal vez no hayas elegido ningun personaje favorito tampoco'
	);
	expect(h4).toBeInTheDocument();

	const p = screen.getByTestId('p');
	expect(p.tagName).toBe('P');
	expect(p.tagName).not.toBe('SPAN', 'H1', 'H2', 'H3', 'H4', 'INPUT');
	expect(p).toHaveTextContent('Revise y vuelva a intentarlo por favor');
	expect(p).toBeInTheDocument();
	const erro = renderer.create(<ErrCharacters />).toJSON();

	expect(erro).toMatchSnapshot();
});
