"use client";
import Image from "next/image";
import AiLogo from "public/images/ai-logo.png";
import { StyledImageContainer, StyledPageContainer } from "./layout";
import Navbar from "@/components/Navbar/";
import { Title, Title2Xl, TitleXl } from "../theme";
import Button from "@/components/Button";
import Link from "next/link";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<StyledImageContainer>
				<Image src={AiLogo} width={700} height={700} alt="ai-logo" />
			</StyledImageContainer>
			<StyledPageContainer>
				<div className="title">
					<TitleXl>Video and Image</TitleXl>
					<Title2Xl>AI-Generated System</Title2Xl>
				</div>
				<div className="btn">
					<Link href={"/chat"}>
						<Button />
					</Link>
				</div>
				<div className="caption">
					<Title>
						Our platform seamlessly generates mesmerizing videos and
						stunning images, revolutionizing the way you bring ideas
						to life.
					</Title>
				</div>
			</StyledPageContainer>
		</>
	);
};

export default LandingPage;
