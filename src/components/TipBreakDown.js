import React from "react";

import { Card, Form, Col, FormGroup, Input, Label, Button } from "reactstrap";
import "./TipBreakDown.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipBreakDown = (props) => {
	const barbackTips = parseFloat(Number(props.totalTips) * 0.15).toFixed(2);
	const tipsAfterBarback = props.totalTips - barbackTips;

	const tipsPerBartender = parseFloat(
		tipsAfterBarback / props.bartenders
	).toFixed(2);
	return (
		<div className="bg1 height100">
			<Card className="row-content card-container">
				<div>
					<h1>Total Tips Collected</h1>
					<h2>{props.totalTips}</h2>
				</div>
				<div>
					<h3>BarBack Tips</h3>
					<FormGroup row>
						<Label sm={4}>BarBack</Label>
						<Col sm={8}>{barbackTips}</Col>
					</FormGroup>
				</div>
				<div>
					<h3>Bartender Tips</h3>
					{props.workingBartenders.map((bartender, i) => (
						<FormGroup row key={i}>
							<Label sm={4}>{bartender}</Label>
							<Col sm={8}>{tipsPerBartender}</Col>
						</FormGroup>
					))}
				</div>
			</Card>
		</div>
	);
};

export default TipBreakDown;
