import React, { useState } from 'react';
import logo from '../../assets/images/marvel-logo.jpeg';
import { SearchStyle } from './SearchStyle';

const Search = ({ search }) => {
	const [text, setText] = useState('');

	const onSearch = (e) => {
		setText(e.target.value);
		search(e.target.value);
	};

	return (
		<SearchStyle>
			<div>
				<img src={logo} alt='marvel' />
				<form>
					<i className='fas fa-search'></i>
					<input
						type='text'
						placeholder='Find a character..'
						onChange={onSearch}
						value={text}
					/>
				</form>
				<button>
					<i className='fas fa-star '></i>
				</button>
			</div>
		</SearchStyle>
	);
};

export default Search;
