import axios from 'axios';
const hash = 'fa9883441e882554b74df48ab1fb7bb1';
const pukey = 'b6f7c0bedbe13be6fde215ac21c638cb';

export const getCharacters = async (query) => {
	const result = await axios.get(
		`https://gateway.marvel.com/v1/public/characters?${
			query ? `nameStartsWith=${query}&` : ''
		}orderBy=name&limit=100&ts=1&apikey=${pukey}&hash=${hash}`
	);
	return result?.data?.data?.results;
};

export const getComic = async (id) => {
	const resul = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=${pukey}&hash=${hash}`
	);
	// debugger;
	return resul?.data?.data?.results;
};

export const getDetails = async (id) => {
	const resul = await axios.get(
		`https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=${pukey}&hash=${hash}`
	);
	// debugger;
	return resul?.data?.data?.results;
};
