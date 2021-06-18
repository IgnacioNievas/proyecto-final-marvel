import styled from 'styled-components';

export const ComicStyle = styled.div`
	grid-column: 1/-1;
	.comic {
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
		box-shadow: 2px 0px 20px rgb(255, 215, 0);
	}
	h1 {
		color: #8b8b8b;
	}
	.infoComic {
		padding: 10px;
		width: 40vw;
	}

	.comicDescription {
		font-weight: bolder;
		padding-top: 20px;
	}

	button {
		margin-left: 80%;
		margin-top: 10px;
		border-radius: 15px 50px;
		cursor: pointer;
		background: transparent;
		box-shadow: 3px 0px 30px rgb(201, 18, 201);
		font-weight: bolder;
	}
	button:hover {
		background-color: rgb(201, 18, 201);
		width: 80px;
		height: 30px;
	}
	p.small {
		text-decoration: ;
		font-weight: bolder;
		font-size: 0.9rem;
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
		.comic {
			flex-direction: column;
			margin: 10px auto;
		}
	}
`;
