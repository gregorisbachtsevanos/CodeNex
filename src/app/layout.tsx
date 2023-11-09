import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import { defaultTheme } from "./theme";
import { GlobalStyles } from "./global.styled";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GenerateTPG",
	description: "AI Generator",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<StyledComponentsRegistry>
				<GlobalStyles />
				<main className={inter.className}>{children}</main>
			</StyledComponentsRegistry>
		</ThemeProvider>
	);
}
