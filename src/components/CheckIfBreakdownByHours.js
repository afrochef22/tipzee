import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const CheckIfBreakdownByHours = (props) => {
	return (
		<div>
			{props.isHoursClicked === false ? (
				<FormGroup switch>
					<Input
						readOnly
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
							readOnly
							checked={props.isHoursClicked}
							type="switch"
							role="switch"
							onClick={props.toggleTipsByHours}
						/>
						<Label check>Calculate by hours worked</Label>
					</FormGroup>
					<FormGroup inline check>
						<Input readOnly type="checkbox" onClick={props.toggleCookByHours} />
						<Label check>Calculate cooks</Label>
					</FormGroup>
					<FormGroup inline check>
						<Input readOnly type="checkbox" onClick={props.toggleBarBackByHours} />
						<Label check>Calculate barbacks</Label>
					</FormGroup>
					<FormGroup inline check>
						<Input readOnly type="checkbox" onClick={props.toggleBartenderByHours} />
						<Label check>Calculate bartenders</Label>
					</FormGroup>
				</div>
			)}
		</div>
	);
};

export default CheckIfBreakdownByHours;
