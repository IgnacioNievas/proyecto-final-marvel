import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/get';
import CharactersTable from '../components/tablemaps/characterstable';
import Search from '../components/search/searchcharacter';
import { Loader } from '../components/loading';
import ErrCharacters from '../components/errorescomponent/errorcharacters';
import { FavProvider } from '../components/favorite/favorite';

const Characters = () => {
	const localKey = 'fav_characters';

	const getLocal = localStorage.getItem(localKey);
	const [characters, setCharacters] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [context, setContext] = useState(JSON.parse(getLocal) || []);
	const [favorite, setFavorite] = useState(JSON.parse(getLocal) || []);

	useEffect(() => {
		getCharacters(query)
			.then((characters) => {
				setCharacters(characters);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => setLoading(false));
	}, [query]);

	function updatefavoriteCharacters(character) {
		const update = [...favorite];
		const charaFavorite = favorite.find((c) => c.id === character.id);
		const isfav = update.indexOf(charaFavorite);

		if (isfav >= 0) {
			update.splice(isfav, 1);
		} else {
			update.push(character);
		}
		setFavorite(update);
		setContext(update);
		localStorage.setItem(localKey, JSON.stringify(update));
	}

	const viewFavorite = () => {
		setCharacters(favorite);
	};

	return isLoading ? (
		<Loader />
	) : !characters.length ? (
		<FavProvider value={{ favoriteCharacters: context }}>
			<div>
				<Search search={setQuery} viewFavorite={viewFavorite}></Search>
				<ErrCharacters />
			</div>
		</FavProvider>
	) : (
		<FavProvider value={{ favoriteCharacters: context }}>
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
