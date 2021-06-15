import React, { useEffect, useState } from 'react';
import HeroesTable from '../components/tableMaps/HeroesTable';
import { getCharacters } from '../api/get';
import Search from '../components/search/SearchCharacter';
import { Loader } from '../components/loading';
import ErrHeroes from '../components/erroresComponent/errorHeroes';

const Heroes = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [query, setQuery] = useState('');

	useEffect(() => {
		getCharacters(query)
			.then((characters) => {
				setItems(characters);
				console.log(characters);
			})
			.finally(() => setLoading(false));
	}, [query]);

	return isLoading ? (
		<Loader />
	) : !items.length ? (
		<div>
			<Search search={setQuery}></Search>
			<ErrHeroes />
		</div>
	) : (
		<div>
			<Search search={setQuery}></Search>
			<HeroesTable characters={items} isLoading={isLoading} />
		</div>
	);
};

export default Heroes;
