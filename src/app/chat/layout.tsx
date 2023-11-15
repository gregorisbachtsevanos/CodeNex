"use client";
import styled from "styled-components";
import StyledPageLayoutContainer from "../wrapper";

export const StyledImageContainer = styled.div`
	position: absolute;
	top: 45%;
	left: 70%;
	transform: translate(-50%, -50%);
`;

export const StyledPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 100vh;

	.btn {
		height: 40%;
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.caption {
		display: flex;
		word-break: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		justify-content: flex-end;
		h4 {
			width: 50%;
		}
	}
`;

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <StyledPageLayoutContainer>{children}</StyledPageLayoutContainer>;
}
