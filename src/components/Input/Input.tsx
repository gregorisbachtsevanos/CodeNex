import { useState, useEffect } from "react";

interface InputProps {
	inputType?: string;
}

export const Input = ({ inputType = "text" }: InputProps) => {
	const [value, setValue] = useState("");
	useEffect(() => console.log(value), [value]);
	return (
		<input type={inputType} onChange={(e) => setValue(e.target.value)} />
	);
};
