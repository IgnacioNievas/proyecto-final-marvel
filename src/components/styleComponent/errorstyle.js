import styled from 'styled-components';

export const ErrStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	margin-bottom: 50px;

	.img {
		width: 200px;
		height: 180px;
		margin: 8px;
		cursor: pointer;
	}
	.img2 {
		width: 500px;
		height: 600px;
		cursor: pointer;
		animation: float 1.2s infinite;
	}

	@keyframes float {
		0% {
			transform: translate(0%);
		}

		50% {
			transform: translate(0%, 10%);
		}
	}

	@media (max-width: 640px) {
		.sub {
			font-size: 1.1em;
		}
		.p2 {
			font-size: 0.6em;
		}
	}
	@media (max-width: 505px) {
		.h {
			font-size: 1.8em;
		}
		.h2 {
			font-size: 1.1em;
		}
		.sub {
			font-size: 0.9em;
		}
		.h3 {
			font-size: 0.9em;
		}
		.sub3 {
			font-size: 0.8em;
		}
		.h4 {
			font-size: 0.7em;
		}
		.p {
			font-size: 0.6em;
		}
		.img2 {
			width: 300px;
			height: 350px;
		}
	}

	@media (max-width: 400px) {
		.h {
			font-size: 1.7em;
		}
		.h2 {
			font-size: 1em;
		}
		.sub {
			font-size: 0.8em;
		}
		.sub3 {
			font-size: 0.7em;
		}
	}
	@media (max-width: 350px) {
		.h {
			font-size: 1em;
		}
		.h2 {
			font-size: 0.8em;
		}

		.sub {
			font-size: 0.6em;
		}
		.h3 {
			font-size: 0.7em;
		}
		.sub3 {
			font-size: 0.5em;
		}
		.h4 {
			font-size: 0.6em;
		}
		.p {
			font-size: 0.5em;
		}
		.p2 {
			font-size: 0.45em;
		}
	}

	@media (max-width: 300px) {
		.h1 {
			font-size: 0.9em;
		}
		.img2 {
			width: 280px;
			height: 350px;
		}
	}
`;
