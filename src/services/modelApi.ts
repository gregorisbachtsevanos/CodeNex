import axios from "axios";

import { config } from "../config";
// api research or change api
export class ModelService {
	faceRecognition = async (image: string) => {
		const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

		const raw = JSON.stringify({
			user_app_id: {
				user_id: config.USER_ID,
				app_id: config.APP_ID,
			},
			inputs: [
				{
					data: {
						image: {
							url: image,
						},
					},
				},
			],
		});

		const res = await axios(
			`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					Authorization: `Key ${config.AUTH}`,
				},
				data: raw,
			}
		);
		console.log(res.data);
		if (res.status === 200) return res.data.outputs;
	};
}
