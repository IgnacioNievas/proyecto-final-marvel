import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getComic } from '../api/get';
import ComicsTable from '../components/tableMaps/comicTable';
import { LoaderComic } from '../components/loading/loading';

const Comic = () => {
	const [comic, setComic] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const { comicId } = useParams();

	useEffect(() => {
		getComic(comicId)
			.then((comic) => {
				setComic(comic);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => setLoading(false));
	}, [comicId]);

	return isLoading ? (
		<LoaderComic />
	) : (
		<div>{comic && <ComicsTable comic={comic} />}</div>
	);
};

export default Comic;
