import React from 'react';
import DetailsCard from '../Cards/detailsComicCards';
import { Contents } from '../styleComponent/characterStyle';

const DetailsTable = ({ comics }) => {
	return (
		<Contents>
			{comics.map((comic) => (
				<DetailsCard key={comic.id} comic={comic}></DetailsCard>
			))}
		</Contents>
	);
};

export default DetailsTable;
