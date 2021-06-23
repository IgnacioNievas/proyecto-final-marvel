import React from 'react';
import styled from 'styled-components';
import dead from '../assets/images/deadpool.png';

export const LoadingStyle = styled.div`
	width: 100%;
	margin-top: 100px;
	color: blue;
	border-radius: 8px;
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;

	img {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 200px;
		height: 180px;
		margin: 8px;
		animation: load 1.2s infinite;
	}

	@keyframes load {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	h1 {
		margin-top: 250px;
	}
`;

export const Loader = () => {
	return (
		<LoadingStyle>
			<img src={dead} alt='deadpool' />
			<h1>Loading...</h1>
		</LoadingStyle>
	);
};
