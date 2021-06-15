import React from 'react';
import { HeoreCardContainer } from '../styleComponent/CardStyle';
import { Link } from 'react-router-dom';

const HereosCard = ({ itemscharacter }) => {
	return (
		<div>
			<HeoreCardContainer>
				<Link to={`details/${itemscharacter.id}/${itemscharacter.name}`}>
					<img
						src={
							itemscharacter.thumbnail.path +
							'.' +
							itemscharacter.thumbnail.extension
						}
						alt={itemscharacter.name}
					/>
					<h1>{itemscharacter.name}</h1>
				</Link>

				<button>
					<i className='far fa-star fa-2x'></i>
				</button>
			</HeoreCardContainer>
		</div>
	);
};

export default HereosCard;
