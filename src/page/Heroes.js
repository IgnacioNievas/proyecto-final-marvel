import React, { useEffect, useState } from 'react';
import HeroesTable from '../components/heroes/HeroesTable';
import { getCharacters } from '../api/get';
import Search from '../components/search/Search';

const Heroes = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [query, setQuery] = useState('');

	useEffect(() => {
		getCharacters(query)
			.then((characters) => {
				setItems(characters);
				// console.log(characters);
			})
			.finally(() => setLoading(false));
	}, [query]);

	return (
		<div>
			<Search search={setQuery}></Search>
			<HeroesTable items={items} isLoading={isLoading} />
		</div>
	);
};

export default Heroes;
