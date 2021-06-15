import React from 'react';
import { ErrStyle } from '../styleComponent/ErrStyle';

const ErrComic = () => {
	return (
		<ErrStyle>
			<h1>
				Comic no encontrado<i className='fas fa-exclamation-triangle'></i>
			</h1>
			<h2> Tal vez no exista o no se encuentre en este personaje </h2>
		</ErrStyle>
	);
};

export default ErrComic;
