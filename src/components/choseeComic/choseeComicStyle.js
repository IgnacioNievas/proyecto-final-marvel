import styled from 'styled-components';

export const ContainerComicCard = styled.div`
	margin: 0 auto;
	padding: 10px;
	cursor: pointer;

	.card {
		margin: 10px;
		width: 246px;
		box-shadow: 8px 8px 10px rgba(47, 49, 49, 1);
		transition: 0.15s all ease;
	}
	.card:hover {
		box-shadow: 5px 8px 5px rgba(47, 49, 49, 1);
		transform: scale(1.025);
		transition: 0.35s all ease;
	}
	.card img {
		width: 100%;
		padding: 0;
		margin: 0;
	}
	.content {
		padding: 15px 20px;
	}
	h1 {
		padding: 0;
		margin: 0 0 10px;
		letter-spacing: -0.075rem;
		color: blue;
	}
	p {
		color: black;
		padding: 0;
		margin: 0;
	}
`;
