import React from 'react';

const FavoriteContext = React.createContext({
	favoriteCharacters: [],
	updatefavoriteCharacters: (id) => null,
	viewFavorite: () => null,
});

export const FavProvider = FavoriteContext.Provider;

export default FavoriteContext;
