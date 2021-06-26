import React from 'react';
import { Link } from 'react-router-dom';
import { ErrStyle } from '../styleComponent/errorstyle';
import thanos from '../../assets/images/thanos.png';

const ErrComic = () => {
	return (
		<ErrStyle>
			<h1 className='h' data-testid='titulo'>
				Comic no encontrado<i className='fas fa-exclamation-triangle'></i>
			</h1>
			<h2 className='sub' data-testid='titulo2'>
				Tal vez no exista o no se encuentre en este personaje
			</h2>
			<h3 className='sub3' data-testid='titulo3'>
				O thanos lo habrá con guantelete del infinito
			</h3>
			<p className='p2' data-testid='parrafo'>
				• Por favor haz click sobre para volver o en el logo para volver a los
				personajes
			</p>
			<p className='p2' data-testid='parrafo2'>
				• Sino borrar la palabra del buscador y volveras a los comics que
				elegiste
			</p>
			<Link to='/'>
				<img data-testid='img' className='img2' src={thanos} alt='thanos' />
			</Link>
		</ErrStyle>
	);
};

export default ErrComic;
