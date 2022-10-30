import React, { useState } from "react";
import { FormGroup, Input, Button, InputGroup } from "reactstrap";
import Select from "react-select";
import "./Cook.css";

const Cook = (props) => {
	const [selected, setSelected] = useState("");
	const addWorkingCook = (e) => {
		if (e.length < props.workingCook.length) {
			const l = e.map((cook) => cook.value);

			const cookToBeRemoved = props.workingCook.filter(function (item) {
				return !l.includes(item);
			});
			props.removeWorkingCook(cookToBeRemoved);
		} else {
			for (let i = 0; i < e.length; i++) {
				props.newWorkingCook(e[i].value);
			}
		}
	};

	const removeHandler = (e) => {
		e.preventDefault();
		const inputVal = document.getElementById(e.target.value).value;
		props.removeWorkingCook(inputVal);
	};

	const cooks = props.employees.cooks
		.filter((bartender) => !props.workingBartender.includes(bartender.value))
		.filter((barBack) => !props.workingBarBack.includes(barBack.value))
		.filter((cook) => !props.workingCook.includes(cook.value))
		.map((cook, i) => {
			return cook;
		});

	return (
		<div>
			<FormGroup>
				<h2>Who is cooking?</h2>

				<Select
					options={cooks}
					key={cooks.value}
					isMulti
					closeMenuOnSelect={false}
					allowSelectAll={true}
					hideSelectedOptions={false}
					placeholder="Select a cook"
					onChange={addWorkingCook}
				/>
			</FormGroup>
		</div>
	);
};

export default Cook;
