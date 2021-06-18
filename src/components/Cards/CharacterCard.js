import React, { useContext } from 'react';
import { CharacterCardContainer } from '../styleComponent/characterStyle';
import { Link } from 'react-router-dom';
import FavoriteContext from '../favorite/favorite';

const CharacterCard = ({ character, updatefavoriteCharacters }) => {
	const { favoriteCharacters } = useContext(FavoriteContext);
	const noFavorite = 'far fa-star fa-2x';
	const favorite = 'fas fa-star fa-2x';
	const iconFavorite = favoriteCharacters.find((c) => c.id === character.id)
		? favorite
		: noFavorite;
	// debugger;

	const clickFavHandle = (e) => {
		e.preventDefault();
		updatefavoriteCharacters(character);
	};
	return (
		<div>
			<CharacterCardContainer>
				<Link to={`details/${character.id}/${character.name}`}>
					<img
						src={character.thumbnail.path + '.' + character.thumbnail.extension}
						alt={character.name}
					/>
					<h1>{character.name}</h1>
				</Link>

				<button onClick={clickFavHandle}>
					<i className={iconFavorite}></i>
				</button>
			</CharacterCardContainer>
		</div>
	);
};

export default CharacterCard;
