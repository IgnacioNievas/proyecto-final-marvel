import React from 'react';
import { useHistory } from 'react-router';
import { ComicStyle } from '../styleComponent/comicStyle';

const ComicCard = ({ item }) => {
	const history = useHistory();
	function gotBackHandle() {
		history.goBack();
	}
	return (
		<ComicStyle>
			<div className='detailsComic'>
				<img
					src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
					alt={item.title}
				/>
				<div className='infoComic'>
					<h1>{item.title}</h1>
					<p className='comicDetails'> {item.description}</p>
					<button onClick={gotBackHandle}>volver</button>
				</div>
			</div>
		</ComicStyle>
	);
};

export default ComicCard;
