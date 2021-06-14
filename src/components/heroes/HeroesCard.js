import React from 'react';
import { HeoreCardContainer } from './CardStyle';
import { Link } from 'react-router-dom';

const HereosCard = ({ item }) => {
	return (
		<div>
			<HeoreCardContainer>
				<Link to={`comics/${item.id}`}>
					<img
						src={item.thumbnail.path + '.' + item.thumbnail.extension}
						alt={item.name}
					/>
					<h1>{item.name}</h1>
				</Link>
				<button>
					<i className='fas fa-star fa-2x'></i>
				</button>
			</HeoreCardContainer>
		</div>
	);
};

export default HereosCard;
