import React from "react";

import { Card, Col, FormGroup, Label, Button } from "reactstrap";
import "./TipBreakDown.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipBreakDown = (props) => {
	const cooksTips = parseFloat(Number(props.totalFoodSales) * 0.15).toFixed(2);

	const tipsPerCook = parseFloat(cooksTips / props.numberOfCooks);

	const barbackTips = parseFloat(
		Number(props.totalTips - cooksTips) * 0.15
	).toFixed(2);

	const tipsPerBarBack = parseFloat(
		barbackTips / props.numberOfBarBacks
	).toFixed(2);

	const tipsAfterBarback = props.totalTips - cooksTips - barbackTips;

	const tipsPerBartender = parseFloat(
		tipsAfterBarback / props.bartenders
	).toFixed(2);

	const submitHandler2 = () => {
		console.log("click");
		props.isSubmitedHandler(false);
	};

	return (
		<div className="bg1 height100">
			<Card className="row-content card-container">
				<div>
					<h1>Total Tips Collected</h1>
					{props.workingCook.map((cook, i) => (
						<FormGroup row>
							<Label sm={4}>{cook}</Label>
							<Col sm={8}>{tipsPerCook}</Col>
						</FormGroup>
					))}
				</div>
				<div>
					<h3>BarBack Tips</h3>
					{props.workingBarBack.map((barBack, i) => (
						<FormGroup row>
							<Label sm={4}>{barBack}</Label>
							<Col sm={8}>{tipsPerBarBack}</Col>
						</FormGroup>
					))}
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