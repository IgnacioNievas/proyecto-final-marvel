import React, { useEffect, useState } from 'react';
import { getComic } from '../api/get';
import { useParams } from 'react-router';
import DetailsTable from '../components/tableMaps/detailsComicTable';
import Search from '../components/search/SearchCharacter';
import { Loader } from '../components/loading';
import ErrComic from '../components/erroresComponent/errorComic';

const Details = () => {
	const [items, setItems] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const { id } = useParams();
	// console.log(id);

	useEffect(() => {
		getComic(id, query)
			.then((comics) => {
				// debugger;
				setItems(comics);
				// console.log(comics);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => setLoading(false));
	}, [id, query]);

	return isLoading ? (
		<Loader />
	) : !items.length ? (
		<div>
			<Search search={setQuery}></Search>
			<ErrComic />
		</div>
	) : (
		<div>
			<Search search={setQuery}></Search>
			{items && <DetailsTable comics={items} loading={isLoading} />}
		</div>
	);
};

export default Details;
