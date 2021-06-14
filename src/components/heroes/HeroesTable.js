import React from 'react';
import { Contents } from './CardStyle';
import HeroesCard from './HeroesCard';
import { Loader } from '../loading';
const HeroesTable = ({ items, isLoading }) => {
	return isLoading ? (
		<Loader />
	) : (
		<Contents>
			{items.map((arritem) => (
				<HeroesCard key={arritem.id} item={arritem}></HeroesCard>
			))}
		</Contents>
	);
};

export default HeroesTable;
