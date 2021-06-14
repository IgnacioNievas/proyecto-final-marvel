import React, { useEffect, useState } from 'react';
import { getComic } from '../api/get';
import { useParams } from 'react-router';
import ComicTable from '../components/choseeComic/choseeComicTable';

const Comics = () => {
	const [items, setItems] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const { id } = useParams();
	// console.log(id);
	useEffect(() => {
		getComic(id)
			.then((comics) => {
				// debugger;
				setItems(comics);
				// console.log(comics);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => setLoading(false));
	}, [id]);
	return items && <ComicTable comic={items} loading={isLoading} />;
};

export default Comics;
