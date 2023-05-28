import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "./components/Input";

import "./App.css";
import { ModelService } from "./services/modelApi";

function App() {
	const [hasImage, setHasImage] = useState(false);
	const [data, setData] = useState([]);
	const modelService = new ModelService();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data: any) => {
		const res = await modelService.faceRecognition(data.image_url);
		setData(res);
		setHasImage(true);
		// .then((res) => localStorage.setItem("data", JSON.stringify(res)));
	};
	console.log(errors);
	console.log(data);

	// const calculateFaceLocation = (data: any) => {
	// 	const face = data.outputs[0].data.regions[0].region_info.bounding_box;
	// 	const image = document.getElementById("inputimage");
	// 	const width = Number(image?.width);
	// 	const height = Number(image?.height);
	// 	return {
	// 		leftCol: face.left_col * width,
	// 		topRow: face.top_row * height,
	// 		rightCol: width - face.right_col * width,
	// 		bottomRow: height - face.bottom_row * height,
	// 	};
	// };

	return (
		<>
			{hasImage &&
				data.map((dt: any, index) => (
					<div key={index}>
						<img src={dt.input.data.image.url} alt="" />
					</div>
				))}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* <input {...register("image_url")} type="text" /> */}
				<Input type="text" {...register("image_url")} />
				<input type="submit" />
			</form>
		</>
	);
}

export default App;
