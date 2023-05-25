import React from "react";

interface ButtonProps {
	children?: React.ReactNode;
	customClass?: string;
	callback?: () => void;
}

export const Button = ({ children, customClass, callback }: ButtonProps) => {
	return (
		<button className={customClass} onClick={callback}>
			{children ? children : "Go"}
		</button>
	);
};
