import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetails } from '../api/get';
import DetailsTable from '../components/tableMaps/detailsComicTable';
import Search from '../components/search/SearchCharacter';
import { LoaderDetails } from '../components/loading/loading';
import ErrComic from '../components/erroresComponent/errorComic';

const Details = () => {
	const [comics, setComics] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const { id } = useParams();

	useEffect(() => {
		getDetails(id, query)
			.then((comics) => {
				setComics(comics);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => setLoading(false));
	}, [id, query]);

	return isLoading ? (
		<LoaderDetails />
	) : !comics.length ? (
		<div>
			<Search search={setQuery}></Search>
			<ErrComic />
		</div>
	) : (
		<div>
			<Search search={setQuery}></Search>
			{comics && <DetailsTable comics={comics} />}
		</div>
	);
};

export default Details;
