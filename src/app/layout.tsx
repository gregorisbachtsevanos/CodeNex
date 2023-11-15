import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Wrapper from "./wrapper";
import styled from "styled-components";

const roboto = Montserrat({
	weight: "300",
	subsets: ["latin"],
	display: "swap",
});

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
		<Wrapper>
			<main className={roboto.className}>{children}</main>
		</Wrapper>
	);
}
