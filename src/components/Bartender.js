import React, { useState } from "react";
import { FormGroup } from "reactstrap";
import Select from "react-select";
import "./Barback.css";

const Bartender = (props) => {
	const addWorkingBartender = (e) => {
		if (e.length < props.workingBartender.length) {
			const l = e.map((bartender) => bartender.value);

			const bartenderToBeRemoved = props.workingBartender.filter(function (
				item
			) {
				return !l.includes(item);
			});
			props.removeWorkingBartender(bartenderToBeRemoved);
		} else {
			for (let i = 0; i < e.length; i++) {
				props.newWorkingBartender(e[i].value);
			}
		}
	};
	const bartenders = props.tips.bartenders
		.filter((cook) => !props.workingCook.includes(cook.value))
		.filter((barBack) => !props.workingBarBack.includes(barBack.value))
		.filter((bartender) => !props.workingBartender.includes(bartender.value))
		.map((bartender, i) => {
			return bartender;
		});

	return (
		<div>
			<FormGroup>
				<h2 htmlFor="exampleSelect">Who is bartending?</h2>

				<Select
					options={bartenders}
					key={bartenders.value}
					isMulti
					closeMenuOnSelect={false}
					allowSelectAll={true}
					hideSelectedOptions={false}
					placeholder="Select a bar-back"
					onChange={addWorkingBartender}
				/>
			</FormGroup>
		</div>
	);
};

export default Bartender;
