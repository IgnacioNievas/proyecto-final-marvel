import React, { useEffect, useState } from 'react';
import CharactersTable from '../components/tableMaps/CharactersTable';
import { getCharacters } from '../api/get';
import Search from '../components/search/SearchCharacter';
import { Loader } from '../components/loading';
import ErrCharacters from '../components/erroresComponent/errorCharacters';
import { FavProvider } from '../components/favorite/favorite';

const Characters = () => {
	const localKey = 'fav_characters';

	const getLocal = localStorage.getItem(localKey);
	const [characters, setCharacters] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [context, setContext] = useState({
		favoriteCharacters: JSON.parse(getLocal) || [],
	});
	const [favorite, setFavorite] = useState(JSON.parse(getLocal) || []);

	useEffect(() => {
		getCharacters(query)
			.then((characters) => {
				setCharacters(characters);
				// console.log(characters);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => setLoading(false));
	}, [query]);

	function updatefavoriteCharacters(character) {
		const update = [...favorite];
		const isfav = update.indexOf(character);
		if (isfav >= 0) {
			update.splice(isfav, 1);
		} else {
			update.push(character);
		}
		setFavorite(update);
		setContext({ favoriteCharacters: update });
		localStorage.setItem(localKey, JSON.stringify(update));
	}

	const viewFavorite = () => {
		setCharacters(favorite);
	};

	return isLoading ? (
		<Loader />
	) : !characters.length ? (
		<FavProvider value={context}>
			<div>
				<Search search={setQuery} viewFavorite={viewFavorite}></Search>
				<ErrCharacters />
			</div>
		</FavProvider>
	) : (
		<FavProvider value={context}>
			<div>
				<Search search={setQuery} viewFavorite={viewFavorite}></Search>
				<CharactersTable
					updatefavoriteCharacters={updatefavoriteCharacters}
					characters={characters}
					isLoading={isLoading}
				/>
			</div>
		</FavProvider>
	);
};

export default Characters;
