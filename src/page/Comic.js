import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getComic } from '../api/get';
import ComicsTable from '../components/tablemaps/comictable';
import { Loader } from '../components/loading';

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
		<Loader />
	) : (
		<div>{comic && <ComicsTable comic={comic} loding={isLoading} />}</div>
	);
};

export default Comic;
