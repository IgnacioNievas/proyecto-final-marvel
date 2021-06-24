import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ContainerComicCard } from '../stylecomponent/detailscomicstyle';

const DetailsCard = ({ comic }) => {
	const { url } = useRouteMatch();

	return (
		<ContainerComicCard>
			<div className='card'>
				<Link
					to={`${url}/comic/${comic.id}/${comic.title}`}
					style={{ textDecoration: 'none' }}>
					<img
						src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
						alt={comic.title}
					/>
					<div className='content'>
						<h1>{comic.title}</h1>
						<p> {comic.description}</p>
					</div>
				</Link>
			</div>
		</ContainerComicCard>
	);
};

export default DetailsCard;
