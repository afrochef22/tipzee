import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const CheckIfBreakdownByHours = (props) => {
	return (
		<div>
			{props.isHoursClicked === false ? (
				<FormGroup switch>
					<Input
						checked={props.isHoursClicked}
						type="switch"
						role="switch"
						onClick={props.toggleTipsByHours}
					/>
					<Label check>Calculate by hours worked</Label>
				</FormGroup>
			) : (
				<div>
					<FormGroup switch>
						<Input
							checked={props.isHoursClicked}
							type="switch"
							role="switch"
							onClick={props.toggleTipsByHours}
						/>
						<Label check>Calculate by hours worked</Label>
					</FormGroup>
					<FormGroup inline check>
						<Input type="checkbox" onClick={""} />
						<Label check>Calculate cooks</Label>
					</FormGroup>
					<FormGroup inline check>
						<Input type="checkbox" onClick={""} />
						<Label check>Calculate barbacks</Label>
					</FormGroup>
					<FormGroup inline check>
						<Input type="checkbox" onClick={""} />
						<Label check>Calculate bartenders</Label>
					</FormGroup>
				</div>
			)}
		</div>
	);
};

export default CheckIfBreakdownByHours;
