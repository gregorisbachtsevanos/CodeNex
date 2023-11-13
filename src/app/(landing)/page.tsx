"use client";
import Image from "next/image";
import AiLogo from "public/ai-logo.png";
import PageLayout, { StyledImageContainer } from "./layout";
import Navbar from "@/components/Navbar/Navbar";
import { TitleLg } from "../theme";

const LandingPage = () => {
	return (
		<PageLayout>
			<StyledImageContainer>
				<Image src={AiLogo} width={700} height={700} alt="ai-logo" />
			</StyledImageContainer>
			<Navbar />
			<TitleLg>
				Elevate Your Projects with Seamless Image and Video Generation
			</TitleLg>
		</PageLayout>
	);
};

export default LandingPage;
