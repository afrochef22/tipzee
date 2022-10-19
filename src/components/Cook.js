import React, { useState } from "react";
import { FormGroup, Input, Button, InputGroup } from "reactstrap";
import "./Cook.css";

const Cook = (props) => {
	const [selected, setSelected] = useState("");
	const addWorkingCook = (e) => {
		props.newWorkingCook(e.target.value);
	};

	const removeHandler = (e) => {
		e.preventDefault();
		const inputVal = document.getElementById(e.target.value).value;
		props.removeWorkingCook(inputVal);
	};

	return (
		<div>
			<FormGroup>
				<h2>Who is cooking?</h2>
				{props.workingCook.map((cook, i) => (
					<InputGroup
						className="select-bartender"
						key={cook}
						onSubmit={removeHandler}
					>
						<Input readOnly defaultValue={cook} id={cook} />
						<Button color="danger" value={cook} onClick={removeHandler}>
							Remove
						</Button>
					</InputGroup>
				))}
				<Input
					id=""
					type="select"
					value={""}
					placeholder="Select a cook"
					onChange={addWorkingCook}
				>
					{props.tips.cooks
						.filter(
							(bartender) => !props.workingBartender.includes(bartender.value)
						)
						.filter((barBack) => !props.workingBarBack.includes(barBack.value))
						.filter((cook) => !props.workingCook.includes(cook.value))
						.map((cook, i) => (
							<option
								disabled={cook.disabled}
								key={cook.value}
								value={cook.value}
							>
								{cook.text}
							</option>
						))}
				</Input>
			</FormGroup>
		</div>
	);
};

export default Cook;
