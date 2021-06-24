import React from 'react';
import CharacterCard from '../cards/CharacterCard';
import { Contents } from '../stylecomponent/characterstyle';

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
