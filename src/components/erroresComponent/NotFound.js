import React from 'react';
import { Link } from 'react-router-dom';
import { ErrStyle } from '../styleComponent/errorstyle';
import error from '../../assets/images/notdead.png';
const NotFound = () => {
	return (
		<ErrStyle>
			<h1 className='h1'>
				404 -Not Found <i className='fas fa-exclamation-triangle'></i>
			</h1>
			<Link to='/'>
				<img className='img' src={error} alt='Error 404' />
			</Link>
			<h2 className='h2'>Haga click sobre la imagen para volver</h2>
		</ErrStyle>
	);
};

export default NotFound;
