"use client";
import styled from "styled-components";
import { StyledPageLayoutContainer } from "../wrapper";
import { FC } from "react";

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

	.with-padding {
		padding: 2rem;
	}

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

type PageLayoutProps = {
	withoutPadding?: React.ReactNode;
	children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ withoutPadding, children }) => {
	return (
		<StyledPageLayoutContainer
			className={`${!withoutPadding ? "with-padding" : ""}`}
		>
			{children}
		</StyledPageLayoutContainer>
	);
};

export default PageLayout;
