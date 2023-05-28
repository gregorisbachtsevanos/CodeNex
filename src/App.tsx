import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "./components/Input";

import "./App.css";
import { ModelService } from "./services/modelApi";

function App() {
	const [src, setSrc] = useState(null);
	const [data, setData] = useState({});
	const modelService = new ModelService();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data: any) => {
		await modelService
			.faceRecognition(data.image_url)
			.then((data) => console.log(data));
		// .then((res) => localStorage.setItem("data", JSON.stringify(res)));
	};
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
