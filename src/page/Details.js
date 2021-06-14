import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetails } from '../api/get';
import Comic from '../components/comic/comic';

const Details = () => {
	const [comic, setComic] = useState(null);

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
			});
	}, [comicId]);
	return comic && <Comic comic={comic} />;
};

export default Details;
