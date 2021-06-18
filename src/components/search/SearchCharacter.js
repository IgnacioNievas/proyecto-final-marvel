import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/marvel-logo.jpeg';

import { SearchStyle } from '../styleComponent/SearchStyle';

const Search = ({ search, viewFavorite }) => {
	const [text, setText] = useState('');
	const { pathname } = useLocation();

	const onSearch = (e) => {
		setText(e.target.value);
		search(e.target.value);
	};

	const clickviewFavHandle = (e) => {
		e.preventDefault();
		viewFavorite();
	};

	return (
		<SearchStyle>
			<div>
				<Link to='/'>
					<img src={logo} alt='marvel' />
				</Link>

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
						<i data-testid='i' className='fas fa-star fa'></i>
					</button>
				) : null}
			</div>
		</SearchStyle>
	);
};

export default Search;
