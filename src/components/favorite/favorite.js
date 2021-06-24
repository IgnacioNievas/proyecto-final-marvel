import React from 'react';

const FavoriteContext = React.createContext({
	favoriteCharacters: [],
});

export const FavProvider = FavoriteContext.Provider;

export default FavoriteContext;
