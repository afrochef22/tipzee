import React from "react";

import { Form, Col, FormGroup, Input, Label, Button } from "reactstrap";
import "./TipBreakDown.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipBreakDown = (props) => {
	const barbackTips = parseFloat(Number(props.totalTips) * 0.15).toFixed(2);
	console.log(barbackTips);
	const tipsAfterBarback = props.totalTips - barbackTips;

	const tipsPerBartender = parseFloat(
		tipsAfterBarback / props.bartenders
	).toFixed(2);

	return (
		<div className="bg1 height100">
			<div className="row-content">
				<div>
					<h1>Total Tips Collected</h1>
					<p>{props.totalTips}</p>
				</div>
				<div>
					<h1>BarBack Tips</h1>
					<p>{barbackTips}</p>
				</div>
				<div>
					<h1>Bartender Tips</h1>
					{props.tips.bartenderPosition
						.slice(0, props.bartenders)
						.map((bartender, i) => (
							<FormGroup row key={i}>
								<Label sm={4}>{bartender.bar}</Label>
								<Col sm={8}>{tipsPerBartender}</Col>
							</FormGroup>
						))}
				</div>
			</div>
		</div>
	);
};

export default TipBreakDown;
