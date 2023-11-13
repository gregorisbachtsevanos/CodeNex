import styled from "styled-components";

export const StyledNavbarContainer = styled.nav`
	width: 100vw;
	height: 50px;
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		color: ${({ theme }) => theme.palette.yellow};
	}
`;
