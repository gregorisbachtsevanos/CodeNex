import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "./components/Input";

import "./App.css";

function App() {
	const [src, setSrc] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => console.log(data.image_url);
	console.log(errors);
	return (
		<>
			{src && <img src={src} alt="" />}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* <input {...register("image_url")} type="text" /> */}
				<Input type="text" {...register("image_url")} />
				<input type="submit" />
			</form>
		</>
	);
}

export default App;
