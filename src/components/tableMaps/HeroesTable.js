import React from 'react';
import { Contents } from '../styleComponent/CardStyle';
import HeroesCard from '../Cards/HeroesCard';

const HeroesTable = ({ characters }) => {
	return (
		<Contents>
			{characters.map((character) => (
				<HeroesCard key={character.id} itemscharacter={character}></HeroesCard>
			))}
		</Contents>
	);
};

export default HeroesTable;
