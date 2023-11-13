"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import { defaultTheme } from "./theme";
import { GlobalStyles } from "./global.styled";

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
