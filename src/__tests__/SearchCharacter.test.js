import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act, create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Search from '../components/search/searchcharacter';

afterEach(cleanup);

test('<Search />, comprabacion de elementos y actualizacion de props', () => {
	const wrapper = render(
		<BrowserRouter>
			<Search />
		</BrowserRouter>
	);
	wrapper.debug();
	let props;
	const input = screen.getByTestId('input');

	expect(input).toBeInTheDocument();
	expect(input.textContent).toBe('');
	expect(input.textContent).not.toBe('characters');
	expect(input.tagName).toBe('INPUT');
	expect(input.tagName).not.toBe('TEXTAREA');

	const button = screen.getByTestId('button');
	expect(button.tagName).toBe('BUTTON');
	expect(button.tagName).not.toBe('INPUT');
	expect(button).toBeInTheDocument();

	act(() => {
		props = create(
			<BrowserRouter>
				<Search value={1} />
			</BrowserRouter>
		);
	});

	// make assertions on props
	expect(props.toJSON()).toMatchSnapshot();

	// update with some different props
	act(() => {
		props.update(
			<BrowserRouter>
				<Search value={2} />
			</BrowserRouter>
		);
	});

	// make assertions on props
	expect(props.toJSON()).toMatchSnapshot();
});
