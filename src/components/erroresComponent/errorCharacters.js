import React from 'react';
import { ErrStyle } from '../styleComponent/errorstyle';
const ErrCharacters = () => {
	return (
		<ErrStyle>
			<h1 className='h' data-testid='h1'>
				Personaje no encontrado<i className='fas fa-exclamation-triangle'></i>
			</h1>
			<h2 className='h2' data-testid='h2'>
				Tal vez lleve - como por ejemplo : Frog-Man
			</h2>
			<h3 className='h3' data-testid='h3'>
				o tal vez no exista el personaje
			</h3>
			<h4 className='h4' data-testid='h4'>
				o tal vez no hayas elegido ningun personaje favorito tampoco
			</h4>
			<p className='p' data-testid='p'>
				• Revise y vuelva a intentarlo , apriete el logo para volver por favor
			</p>
			<p className='p' data-testid='p2'>
				• Sino borrar la palabra del buscador y volveras a los personajes
			</p>
		</ErrStyle>
	);
};

export default ErrCharacters;
