import React, { forwardRef } from "react";

type Ref = HTMLInputElement;

type InputProps = {
	type: string;
};

export const Input = forwardRef<Ref, InputProps>(({ type, ...rest }, ref) => {
	return (
		<div>
			<input type={type} {...rest} ref={ref} />
		</div>
	);
});
