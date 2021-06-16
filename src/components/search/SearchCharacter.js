import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/marvel-logo.jpeg';
import FavoriteContext from '../favorite/favorite';
import { SearchStyle } from '../styleComponent/SearchStyle';

const Search = ({ search }) => {
	const [text, setText] = useState('');
	const { pathname } = useLocation();
	const { viewFavorite } = useContext(FavoriteContext);
	// console.log(pathname);

	const onSearch = (e) => {
		setText(e.target.value);
		search(e.target.value);
	};
	const clickviewHandle = (e) => {
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
						type='text'
						placeholder='Buscar...'
						onChange={onSearch}
						value={text}
					/>
				</form>
				{pathname === '/' ? (
					<button onClick={clickviewHandle}>
						<i className='fas fa-star '></i>
					</button>
				) : (
					''
				)}
			</div>
		</SearchStyle>
	);
};

export default Search;
