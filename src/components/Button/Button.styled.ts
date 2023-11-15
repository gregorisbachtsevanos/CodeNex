import styled from "styled-components";

export const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 230px;
	height: 75px;
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.palette.yellow};
	color: ${({ theme }) => theme.palette.black};
	border-radius: 50px;
	font-weight: bold;

	:nth-child(2) {
		transform: scale(1.5);
	}

	button {
		font-size: 1.1rem;
	}
`;
