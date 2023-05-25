import { useState } from "react";

import { BiImageAlt } from "react-icons/bi";
import { AiOutlineLink, AiFillCamera } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { IoMdAdd } from "react-icons/io";

import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
	const [value, setValue] = useState("");

	const handleClick = () => {
		console.log(1);
	};

	const handleChange = (e: any) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div className="btn-container">
				{/* <div className="btn">
					<Button customClass="add-btn" callback={handleClick}>
						<IoMdAdd />
					</Button>
					<Input />
					<Button callback={handleClick} />
				</div>

				<div className="btn">
					<Button
						customClass="hidden-btn generate-btn"
						callback={handleClick}
					>
						<TfiReload />
					</Button>
					<Input />
					<Button callback={handleClick} />
				</div> */}

				<div className="btn">
					<Button
						customClass="hidden-btn upload-btn"
						callback={handleClick}
					>
						<BiImageAlt />
					</Button>
					<Input callback={(e) => handleChange(e)} />
					<Button callback={handleClick} />
				</div>

				{/* <div className="btn">
					<Button
						customClass="hidden-btn link-btn"
						callback={handleClick}
					>
						<AiOutlineLink />
					</Button>
					<Input inputType="url" />
					<Button callback={handleClick} />
				</div>

				<div className="btn">
					<Button
						customClass="hidden-btn camera-btn"
						callback={handleClick}
					>
						<AiFillCamera />
					</Button>
					<Input />
					<Button callback={handleClick} />
				</div> */}
			</div>
		</>
	);
}

export default App;
