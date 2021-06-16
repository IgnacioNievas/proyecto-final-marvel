import axios from 'axios';
const hash = 'fa9883441e882554b74df48ab1fb7bb1';
const pukey = 'b6f7c0bedbe13be6fde215ac21c638cb';
const URL = 'https://gateway.marvel.com/v1/public';
const randomNumber = Math.round(Math.random() * 1015);
let api;

export const getCharacters = async (query) => {
	if (query === '') {
		api = `${URL}/characters?orderBy=name&offset=${randomNumber}&limit=100&ts=1&apikey=${pukey}&hash=${hash}`;
	} else {
		api = `${URL}/characters?nameStartsWith=${query}&orderBy=name&limit=100&ts=1&apikey=${pukey}&hash=${hash}`;
	}
	const result = await axios.get(`${api}`);
	return result?.data?.data?.results;
};

export const getComic = async (id, query) => {
	const resul = await axios.get(
		`${URL}/characters/${id}/comics?${
			query ? `titleStartsWith=${query}&` : ''
		}orderBy=issueNumber&ts=1&apikey=${pukey}&hash=${hash}`
	);
	// debugger;
	return resul?.data?.data?.results;
};

export const getDetails = async (id) => {
	const resul = await axios.get(
		`${URL}/comics/${id}?ts=1&apikey=${pukey}&hash=${hash}`
	);
	// debugger;
	return resul?.data?.data?.results;
};
