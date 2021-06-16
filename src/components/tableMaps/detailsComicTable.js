import React from 'react';
import { Contents } from '../styleComponent/CardStyle';
import DetailsCard from '../Cards/detailsComicCards';

const DetailsTable = ({ comics }) => {
	return (
		<Contents>
			{comics.map((comic) => (
				<DetailsCard key={comic.id} comicitem={comic}></DetailsCard>
			))}
		</Contents>
	);
};

export default DetailsTable;
