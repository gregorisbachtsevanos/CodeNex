"use client";
import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import { defaultTheme } from "./theme";
import { GlobalStyles } from "./global.styled";

export const StyledPageLayoutContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: linear-gradient(
		160deg,
		rgba(24, 36, 57, 1) 0%,
		rgba(22, 45, 68, 1) 25%,
		rgba(46, 21, 77, 1) 60%,
		rgba(42, 22, 70, 1) 100%
	);
`;

export default function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<html>
				<body>
					<StyledComponentsRegistry>
						<GlobalStyles />
						{children}
					</StyledComponentsRegistry>
				</body>
			</html>
		</ThemeProvider>
	);
}
