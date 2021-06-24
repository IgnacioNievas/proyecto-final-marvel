import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/marvel-logo.jpeg';

import { SearchStyle } from '../stylecomponent/searchstyle';

const SearchComic = ({ search }) => {
	const [text, setText] = useState('');

	const onSearch = (e) => {
		setText(e.target.value);
		search(e.target.value);
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
			</div>
		</SearchStyle>
	);
};
export default SearchComic;
