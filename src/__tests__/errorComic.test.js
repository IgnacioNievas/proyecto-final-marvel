import ErrComic from '../components/erroresComponent/errorComic';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

test('<ErrComic/> , prueba de existencia de elementos', () => {
	const wrapper = render(<ErrComic />);
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

	const errComic = renderer.create(<ErrComic />).toJSON();

	expect(errComic).toMatchSnapshot();
});
