"use client";
import styled from "styled-components";

const StyledPageLayoutContainer = styled.div`
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

export const StyledImageContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <StyledPageLayoutContainer>{children}</StyledPageLayoutContainer>;
}
