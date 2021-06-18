import React from 'react';
import { Contents } from '../styleComponent/characterStyle';
import CharacterCard from '../Cards/CharacterCard';

const CharactersTable = ({ characters, updatefavoriteCharacters }) => {
	return (
		<Contents>
			{characters.map((character) => (
				<CharacterCard
					key={character.id}
					character={character}
					updatefavoriteCharacters={updatefavoriteCharacters}></CharacterCard>
			))}
		</Contents>
	);
};

export default CharactersTable;
