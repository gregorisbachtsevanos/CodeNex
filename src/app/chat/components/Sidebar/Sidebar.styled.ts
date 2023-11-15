import styled from "styled-components";

export const StyledSidebarContainer = styled.nav`
	width: 10%;
	height: 100vh;
	max-width: 200px;
	background-color: ${({ theme }) => theme.palette.dark[1]};
`;
