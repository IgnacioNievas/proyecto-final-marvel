import React from 'react';
import { ErrStyle } from '../styleComponent/ErrStyle';

const NotFound = () => {
	return (
		<ErrStyle>
			<h1>
				404 -Not Found <i className='fas fa-exclamation-triangle'></i>
			</h1>
		</ErrStyle>
	);
};

export default NotFound;
