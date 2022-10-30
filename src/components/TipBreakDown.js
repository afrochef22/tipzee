import React, { useState } from "react";

import { Card, Col, FormGroup, Label, Button } from "reactstrap";
import "./TipBreakDown.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipBreakDown = (props) => {
	const [numberOfBartenders, setNumberOfBartenders] = useState(0);
	const [totalTipsCollected, setTotalTipsCollected] = useState(0);

	const backBtnHandler = (e) => {
		window.location.reload();
	};

	const bartenderHoursList = props.workingBartenderHoursList[0].filter(
		(hours) => hours > 0
	);

	const cooksTips =
		props.numberOfCooks === 0
			? 0
			: parseFloat(Number(props.totalFoodSales) * 0.15).toFixed(2);

	const tipsPerCook =
		props.numberOfCooks === 0 ? 0 : parseFloat(cooksTips / props.numberOfCooks);

	const barbackTips =
		props.numberOfBarBacks === 0
			? 0
			: parseFloat(Number(props.totalTips - cooksTips) * 0.15).toFixed(2);

	const tipsPerBarBack = parseFloat(
		barbackTips / props.numberOfBarBacks
	).toFixed(2);

	const tipsAfterBarback = props.totalTips - cooksTips - barbackTips;

	const barHours = props.totalBartnederHoursWorked;

	const tipsPerBartender = () => {
		if (props.isBartenderHoursClicked === true) {
			let tipsPerHour = parseFloat(tipsAfterBarback / barHours).toFixed(2);

			return tipsPerHour;
		} else {
			let tips = parseFloat(tipsAfterBarback / props.bartenders).toFixed(2);
			return tips;
		}
	};

	const tipsPerHour = tipsPerBartender();

	const submitHandler2 = () => {
		console.log("click");
		props.isSubmitedHandler(false);
	};

	const workingBartenderList = props.workingBartenderList;
	console.log(props.employees.bartenders);
	let test = props.workingBartenders.map(function (bartender, i) {
		if ((props.employees.bartenders.value = bartender))
			return props.employees.bartenders.value;
	});
	console.log(test);
	console.log(props.employees.bartenders);

	return (
		<div className="bg1 height100">
			<Card className="row-content card-container">
				<div>
					<h1>Total Tips Collected</h1>
					<h1>${props.totalTips}</h1>

					<h3>Cooks Tips</h3>
					{props.workingCook.map((cook, i) => (
						<FormGroup row>
							<Label sm={4}>{cook}</Label>
							<Col sm={8}>${tipsPerCook}</Col>
						</FormGroup>
					))}
				</div>
				<div>
					<h3>BarBack Tips</h3>
					{props.workingBarBack.map((barBack, i) => (
						<FormGroup row>
							<Label sm={4}>{barBack}</Label>
							<Col sm={8}>${tipsPerBarBack}</Col>
						</FormGroup>
					))}
				</div>
				{props.isBartenderHoursClicked === true ? (
					<div>
						<h3>Bartender Tips</h3>
						{props.workingBartenders.map((bartender, i) => (
							<FormGroup row key={i}>
								<Label sm={4}>{bartender}</Label>
								{
									(props.employees.bartenders.value = bartender ? (
										<Col sm={8}>
											{(
												tipsPerHour * props.employees.bartenders.hoursWorked
											).toFixed(2)}
										</Col>
									) : null)
								}
								{/* <Col sm={8}>
									{(tipsPerHour * bartenderHoursList[i]).toFixed(2)}
								</Col> */}
							</FormGroup>
						))}
					</div>
				) : (
					<div>
						<h3>Bartender Tips</h3>
						{props.workingBartenders.map((bartender, i) => (
							<FormGroup row key={i}>
								<Label sm={4}>{bartender}</Label>
								<Col sm={8}>{tipsPerHour}</Col>
							</FormGroup>
						))}
					</div>
				)}
				<Button
					onClick={backBtnHandler}
					className="button-block bg2"
					size="lg"
					type="submit"
				>
					Reset
				</Button>
			</Card>
		</div>
	);
};

export default TipBreakDown;
