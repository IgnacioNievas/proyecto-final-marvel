import React, { useState, useContext } from 'react';
import logo from '../../assets/images/marvel-logo.jpeg';
import FavoriteContext from '../favorite/favorite';
import { SearchStyle } from '../stylecomponent/searchstyle';

const Search = ({ search, viewFavorite }) => {
	const [text, setText] = useState('');
	const { favoriteCharacters } = useContext(FavoriteContext);
	const noFavorite = 'far fa-star fa-2x';
	const favorite = 'fas fa-star fa-2x';
	const iconFavorite = favoriteCharacters.length > 0 ? favorite : noFavorite;
	console.log(favoriteCharacters, iconFavorite);

	const onSearch = (e) => {
		setText(e.target.value);
		search(e.target.value);
	};

	const clickviewFavHandle = (e) => {
		e.preventDefault();
		viewFavorite();
	};

	const refreshHandle = (e) => {
		e.preventDefault();
		window.location.reload();
	};

	return (
		<SearchStyle>
			<div>
				<button onClick={refreshHandle}>
					<img src={logo} alt='marvel' />
				</button>
				<form style={{ width: '70%' }}>
					<i className='fas fa-search'></i>
					<input
						data-testid='input'
						type='text'
						placeholder='Buscar...'
						onChange={onSearch}
						value={text}
					/>
				</form>

				<button data-testid='button' onClick={clickviewFavHandle}>
					<i data-testid='i' className={iconFavorite}></i>
				</button>
			</div>
		</SearchStyle>
	);
};

export default Search;
