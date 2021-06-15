import React from 'react';
import { ErrStyle } from '../styleComponent/ErrStyle';
const ErrHeroes = () => {
	return (
		<ErrStyle>
			<h1>
				Personaje no encontrado<i className='fas fa-exclamation-triangle'></i>
			</h1>
			<h2> Tal vez lleve - como por ejemplo : Frog-Man</h2>
			<h3> o tal vez no exista el personaje </h3>
		</ErrStyle>
	);
};

export default ErrHeroes;
