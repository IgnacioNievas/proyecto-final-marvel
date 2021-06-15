import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetails } from '../api/get';
import ComicsTable from '../components/tableMaps/comicTable';
import { Loader } from '../components/loading';

const Comic = () => {
	const [comic, setComic] = useState(null);
	const [isLoading, setLoading] = useState(true);

	const { comicId } = useParams();
	// console.log(comicId);
	useEffect(() => {
		getDetails(comicId)
			.then((comic) => {
				// debugger;
				setComic(comic);
				console.log(comic);
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
