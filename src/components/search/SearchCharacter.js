import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/marvel-logo.jpeg';
import FavoriteContext from '../favorite/favorite';
import { SearchStyle } from '../stylecomponent/searchstyle';

const Search = ({ search, viewFavorite }) => {
	const [text, setText] = useState('');
	const { favoriteCharacters } = useContext(FavoriteContext);
	const { pathname } = useLocation();
	const noFavorite = 'far fa-star fa-2x';
	const favorite = 'fas fa-star fa-2x';
	const iconFavorite = favoriteCharacters.length > 0 ? favorite : noFavorite;

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
				{pathname === '/' ? (
					<button onClick={refreshHandle}>
						<img src={logo} alt='marvel' />
					</button>
				) : (
					<Link to='/'>
						<img src={logo} alt='marvel' />
					</Link>
				)}
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
				{pathname === '/' ? (
					<button data-testid='button' onClick={clickviewFavHandle}>
						<i data-testid='i' className={iconFavorite}></i>
					</button>
				) : null}
			</div>
		</SearchStyle>
	);
};

export default Search;
