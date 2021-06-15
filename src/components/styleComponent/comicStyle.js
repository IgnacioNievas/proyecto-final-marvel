import styled from 'styled-components';

export const ComicStyle = styled.div`
	grid-column: 1/-1;
	.detailsComic {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin-bottom: 100px;
		width: 100vw;
	}
	img {
		object-fit: contain;
		width: 30vw;
		height: auto;
		margin-right: 10%;
		margin-top: 15px;
		border-radius: 10%;
	}
	h1 {
		color: #8b8b8b;
	}
	.infoComic {
		padding: 10px;
		width: 40vw;
	}

	.comicDetails {
		font-weight: bolder;
		padding-top: 20px;
	}
	@media (max-width: 600px) {
		img {
			object-fit: contain;
		}

		.infoComic,
		img {
			width: 80vw;
			margin: auto;
		}
		.detailsComic {
			flex-direction: column;
			margin: 10px auto;
		}
	}
`;
