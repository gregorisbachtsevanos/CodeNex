import React from "react";

export const Image: React.FC<{ image?: string }> = ({ image }) => {
	return (
		<div>
			<img src={image} alt={image} />
		</div>
	);
};
