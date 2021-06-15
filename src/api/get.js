import axios from 'axios';
const hash = 'fa9883441e882554b74df48ab1fb7bb1';
const pukey = 'b6f7c0bedbe13be6fde215ac21c638cb';
const url = 'https://gateway.marvel.com/v1/public';
const randomNumber = Math.round(Math.random() * 1015);
let API;

export const getCharacters = async (query) => {
	if (query === '') {
		API = `${url}/characters?orderBy=name&offset=${randomNumber}&limit=100&ts=1&apikey=${pukey}&hash=${hash}`;
	} else {
		API = `${url}/characters?nameStartsWith=${query}&orderBy=name&limit=100&ts=1&apikey=${pukey}&hash=${hash}`;
	}
	const result = await axios.get(`${API}`);
	return result?.data?.data?.results;
};

export const getComic = async (id, query) => {
	const resul = await axios.get(
		`${url}/characters/${id}/comics?${
			query ? `titleStartsWith=${query}&` : ''
		}orderBy=issueNumber&ts=1&apikey=${pukey}&hash=${hash}`
	);
	// debugger;
	return resul?.data?.data?.results;
};

export const getDetails = async (id) => {
	const resul = await axios.get(
		`${url}/comics/${id}?ts=1&apikey=${pukey}&hash=${hash}`
	);
	// debugger;
	return resul?.data?.data?.results;
};
