import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerComicCard } from './choseeComicStyle';

const ComicCard = ({ comicitem }) => {
	return (
		<ContainerComicCard>
			<div className='card'>
				<Link
					to={`/details/${comicitem.id}`}
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

export default ComicCard;
