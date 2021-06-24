import styled from 'styled-components';

export const SearchStyle = styled.section`
	box-shadow: 0 2px 8px grey;
	padding: 20px 25px 30px;
	div {
		display: flex;
		justify-content: space-between;
	}

	img {
		width: 50px;
	}
	input {
		outline: none;
		border: none;
	}
	form {
		opacity: 0.6;
	}
	form:hover {
		opacity: 1;
	}
	form i {
		margin-right: 15px;
	}
	button {
		background: transparent;
		border: none;
		cursor: pointer;
		color: gray;
	}

	@media (max-width: 320px) {
		img {
			width: 27px;
		}

		input {
			width: 100px;
		}
	}
`;
