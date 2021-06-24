import React from 'react';
import ComicCard from '../cards/comiccard';

const ComicsTable = ({ comic }) => {
	return (
		<>
			{comic.map((comic) => (
				<ComicCard key={comic.id} comic={comic}></ComicCard>
			))}
		</>
	);
};

export default ComicsTable;
