import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ContainerComicCard } from '../styleComponent/detailsComicStyle';

const DetailsCard = ({ comicitem }) => {
	const { url } = useRouteMatch();

	return (
		<ContainerComicCard>
			<div className='card'>
				<Link
					to={`${url}/comic/${comicitem.id}/${comicitem.title}`}
					style={{ textDecoration: 'none' }}>
					<img
						src={`${comicitem.thumbnail.path}.${comicitem.thumbnail.extension}`}
						alt={comicitem.title}
					/>
					<div className='content'>
						<h1>{comicitem.title}</h1>
						<p> {comicitem.description}</p>
					</div>
				</Link>
			</div>
		</ContainerComicCard>
	);
};

export default DetailsCard;
