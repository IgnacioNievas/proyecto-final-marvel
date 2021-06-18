import styled from 'styled-components';

export const CharacterCardContainer = styled.div`
	width: 246px;
	height: 370px;
	box-shadow: 8px 8px 10px rgba(47, 49, 49, 1);
	margin: 10px;
	display: flex;
	img {
		cursor: pointer;
		object-fit: cover;
		width: 246px;
		height: 370px;
	}
	button {
		background: transparent;
		border: none;
		color: white;
	}

	h1 {
		display: block;
		position: absolute;
		margin-top: -68px;
		color: white;
		background-color: rgba(45, 49, 49, 0.8);
		width: 246px;
		text-align: center;
	}
	&:hover {
		box-shadow: 5px 8px 5px rgba(47, 49, 49, 1);
	}
	i {
		cursor: pointer;
		margin-bottom: 335px;
		margin-left: -45px;
	}
`;

export const Contents = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
