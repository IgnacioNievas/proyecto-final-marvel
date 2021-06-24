import React from 'react';
import { ErrStyle } from '../styleComponent/errorstyle';

const ErrComic = () => {
	return (
		<ErrStyle>
			<h1 data-testid='titulo'>
				Comic no encontrado<i className='fas fa-exclamation-triangle'></i>
			</h1>
			<h2 data-testid='titulo2'>
				Tal vez no exista o no se encuentre en este personaje
			</h2>
		</ErrStyle>
	);
};

export default ErrComic;
