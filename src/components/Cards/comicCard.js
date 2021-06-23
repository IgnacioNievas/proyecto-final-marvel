import React from 'react';
import { useHistory } from 'react-router';
import { ComicStyle } from '../styleComponent/comicStyle';

const ComicCard = ({ comic }) => {
	const history = useHistory();

	function gotBackHandle() {
		history.goBack();
	}

	return (
		<ComicStyle>
			<div className='comic'>
				<img
					src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
					alt={comic.title}
				/>
				<div className='infoComic'>
					<h1>{comic.title}</h1>
					<p className='comicDescription'> {comic.description}</p>

					{comic.prices.map((price) => (
						<p key={comic.id} className='small'>
							• {price.type} : $ {price.price}
						</p>
					))}

					<button onClick={gotBackHandle}>Volver</button>
				</div>
			</div>
		</ComicStyle>
	);
};

export default ComicCard;
