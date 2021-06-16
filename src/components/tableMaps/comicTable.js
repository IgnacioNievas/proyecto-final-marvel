import React from 'react';
import ComicCard from '../Cards/comicCard';

const ComicsTable = ({ comic }) => {
	return (
		<>
			{comic.map((items) => (
				<ComicCard key={items.id} item={items}></ComicCard>
			))}
		</>
	);
};

export default ComicsTable;
