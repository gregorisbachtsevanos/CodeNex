import React from "react";
import { StyledButtonContainer } from "./Button.styled";
import Image from "next/image";
import PlayIcon from "public/svg/play.svg";
import LineIcon from "public/svg/line.svg";
import Link from "next/link";

const Button = () => {
	return (
		<StyledButtonContainer>
			<Image src={PlayIcon} width={20} height={20} alt="ai-logo" />
			<Image src={LineIcon} width={20} height={20} alt="ai-logo" />
			<button>Let&apos;s demo</button>
		</StyledButtonContainer>
	);
};

export default Button;
