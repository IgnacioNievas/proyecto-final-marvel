import React from 'react';
import { Contents } from '../heroes/CardStyle';
import { Loader } from '../loading';
import ComicCard from './choseeComicCards';

const ComicTable = ({ comic, isLoading }) => {
	return isLoading ? (
		<Loader />
	) : (
		<Contents>
			{comic.map((arrcomic) => (
				<ComicCard key={arrcomic.id} comicitem={arrcomic}></ComicCard>
			))}
		</Contents>
	);
};

export default ComicTable;
