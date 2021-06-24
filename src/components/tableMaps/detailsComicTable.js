import React from 'react';
import DetailsCard from '../cards/detailsComicCards';
import { Contents } from '../stylecomponent/characterstyle';

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
