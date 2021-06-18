import React from 'react';
import { ErrStyle } from '../styleComponent/ErrStyle';
const ErrCharacters = () => {
	return (
		<ErrStyle>
			<h1 data-testid='h1'>
				Personaje no encontrado<i className='fas fa-exclamation-triangle'></i>
			</h1>
			<h2 data-testid='h2'> Tal vez lleve - como por ejemplo : Frog-Man</h2>
			<h3 data-testid='h3'> o tal vez no exista el personaje </h3>
			<h4 data-testid='h4'>
				o tal vez no alla elegido ningun personaje favorito tampoco
			</h4>
			<p data-testid='p'>Revise y vuelva a intentarlo por favor </p>
		</ErrStyle>
	);
};

export default ErrCharacters;
