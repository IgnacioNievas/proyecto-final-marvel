import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetails } from '../api/get';
import DetailsTable from '../components/tablemaps/detailscomictable';
import SearchComic from '../components/search/searchcomic';
import { Loader } from '../components/loading';
import ErrComic from '../components/errorescomponent/errorcomic';

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
		<Loader />
	) : !comics.length ? (
		<div>
			<SearchComic search={setQuery}></SearchComic>
			<ErrComic />
		</div>
	) : (
		<div>
			<SearchComic search={setQuery}></SearchComic>
			{comics && <DetailsTable comics={comics} loading={isLoading} />}
		</div>
	);
};

export default Details;
