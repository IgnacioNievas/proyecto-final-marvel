import React from 'react';
import { Contents } from '../styleComponent/characterStyle';
import DetailsCard from '../Cards/detailsComicCards';

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
