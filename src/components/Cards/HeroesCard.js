import React, { useContext } from 'react';
import { HeoreCardContainer } from '../styleComponent/CardStyle';
import { Link } from 'react-router-dom';
import FavoriteContext from '../favorite/favorite';

const HereosCard = ({ itemscharacter }) => {
	const { favoriteCharacters, updatefavoriteCharacters } =
		useContext(FavoriteContext);
	const noFav = 'far fa-star fa-2x';
	const favo = 'fas fa-star fa-2x';
	const favorite = favoriteCharacters.includes(itemscharacter) ? favo : noFav;

	const clickHandle = (e) => {
		e.preventDefault();
		updatefavoriteCharacters(itemscharacter);
	};
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

				<button onClick={clickHandle}>
					<i className={favorite}></i>
				</button>
			</HeoreCardContainer>
		</div>
	);
};

export default HereosCard;
