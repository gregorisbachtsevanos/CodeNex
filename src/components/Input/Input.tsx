import React from "react";

interface InputProps {
	inputType?: string;
	callback?: (e?: string) => void;
}

export const Input = ({ inputType = "text", callback }: InputProps) => {
	return <input type={inputType} onChange={callback} />;
};
