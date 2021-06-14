import React from 'react';
import styled from 'styled-components';

export const Loade = styled.div`
	position: relative;
	width: 60px;
	height: 60px;
	margin: 10px;

	.div {
		width: 100%;
		height: 100%;
		border: solid 10px transparent;
		border-top-color: red;
		border-left-color: red;
		border-bottom-color: red;
		border-radius: 50%;
		animation: load 1s linear infinite;
	}
	.di {
		transform: translate(950%, 300%);
	}
	h1 {
		color: blue;
		margin-top: 50px;
	}
	@keyframes load {
		0% {
			transform: translate(750%, 200%) rotate(0deg);
		}
		100% {
			transform: translate(750%, 200%) rotate(360deg);
		}
	}
`;

export const Loader = () => {
	return (
		<Loade>
			<div className='div'></div>
			<div className='di'>
				<h1> Loading... </h1>
			</div>
		</Loade>
	);
};
