import React, { useState } from "react";
import { FormGroup, Input, Button, InputGroup } from "reactstrap";
import Select from "react-select";
import "./Barback.css";

const BarBack = (props) => {
	const [selected, setSelected] = useState("");

	const addWorkingBarBack = (e) => {
		if (e.length < props.workingBarBack.length) {
			const l = e.map((barBack) => barBack.value);

			const barBackToBeRemoved = props.workingBarBack.filter(function (item) {
				return !l.includes(item);
			});
			props.removeWorkingBarBack(barBackToBeRemoved);
		} else {
			for (let i = 0; i < e.length; i++) {
				props.newWorkingBarBack(e[i].value);
			}
		}
	};

	const barBacks = props.tips.barBacks
		.filter((cook) => !props.workingCook.includes(cook.value))
		.filter((bartender) => !props.workingBartender.includes(bartender.value))
		.filter((barBack) => !props.workingBarBack.includes(barBack.value))
		.map((barBack, i) => {
			return barBack;
		});

	return (
		<div>
			<FormGroup>
				<h2>Who is bar-backing?</h2>

				<Select
					options={barBacks}
					key={barBacks.value}
					isMulti
					closeMenuOnSelect={false}
					allowSelectAll={true}
					hideSelectedOptions={false}
					placeholder="Select a bar-back"
					onChange={addWorkingBarBack}
				/>
			</FormGroup>
		</div>
	);
};

export default BarBack;
