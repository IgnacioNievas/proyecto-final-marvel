import React, { useEffect, useState } from 'react';
import HeroesTable from '../components/tableMaps/HeroesTable';
import { getCharacters } from '../api/get';
import Search from '../components/search/SearchCharacter';
import { Loader } from '../components/loading';
import ErrHeroes from '../components/erroresComponent/errorHeroes';
import { FavProvider } from '../components/favorite/favorite';

const Heroes = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [favorite, setFavorite] = useState([]);
	const localKey = 'fav_characters';
	// const getLocal = localStorage.getItem(localKey);

	function updatefavoriteCharacters(cards) {
		const update = [...favorite];
		const isfav = update.indexOf(cards);
		if (isfav >= 0) {
			update.splice(isfav, 1);
		} else {
			update.push(cards);
		}
		setFavorite(update);
		localStorage.setItem(localKey, JSON.stringify(update));
		// console.log(update);
	}

	const viewFavorite = () => {
		let fav_item = JSON.parse(localStorage.getItem(localKey));
		setItems(fav_item);
		setFavorite(fav_item);
	};

	const loadFavorite = () => {
		const fav_character = JSON.parse(localStorage.getItem(localKey)) || [];
		setFavorite(fav_character);
	};

	useEffect(() => {
		loadFavorite();
	}, []);

	useEffect(() => {
		getCharacters(query)
			.then((characters) => {
				setItems(characters);
				// console.log(characters);
			})
			.finally(() => setLoading(false));
	}, [query]);

	return isLoading ? (
		<Loader />
	) : !items.length ? (
		<FavProvider
			value={{
				viewFavorite: viewFavorite,
			}}>
			<div>
				<Search search={setQuery}></Search>
				<ErrHeroes />
			</div>
		</FavProvider>
	) : (
		<FavProvider
			value={{
				favoriteCharacters: favorite,
				updatefavoriteCharacters: updatefavoriteCharacters,
				viewFavorite: viewFavorite,
			}}>
			<div>
				<Search search={setQuery}></Search>
				<HeroesTable characters={items} isLoading={isLoading} />
			</div>
		</FavProvider>
	);
};

export default Heroes;
