import React from "react";
import {
	Form,
	Col,
	FormGroup,
	Input,
	Label,
	Button,
	Card,
	InputGroup,
} from "reactstrap";
import "./CreditCardInputForm.css";

const CreditCardInputForm = (props) => {
	const bartendersInfo = props.tips.bartenders.filter((bartender) => {
		return bartender.tipsCollected >= 0, bartender.hoursWorked >= 0;
	});

	const foodSalesHandler = (e) => {
		let sales = e.target.value;
		return props.addFoodSales(sales);
	};

	const hoursHandler = (e) => {
		let value = e.target.value;
		let id = e.target.id;
		for (let i = -1; i < e.target.id; i++) {
			if ((i = e.target.id)) {
				props.tips.bartenders[id].hoursWorked = Number(value);
				props.addWorkingBartnederHoursHandler(
					props.tips.bartenders[id].hoursWorked
				);
			}
		}
	};

	const addHoursHandler = (e) => {
		console.log(e);
		props.addWorkingBartnederHoursHandler(e.target.value);
	};

	const barTipHandler = (e) => {
		let value = e.target.value;
		let id = e.target.id;
		for (let i = -1; i < e.target.id; i++) {
			if ((i = e.target.id)) {
				props.tips.bartenders[id].tipsCollected = Number(value);
			}
		}
	};

	return (
		<div>
			{props.isBartenderHoursClicked === false ? (
				<div>
					<FormGroup row key={""}>
						<Label sm={4}>Total Food Sales</Label>
						<Col sm={8}>
							<Input
								id={""}
								name="FoodSalesTotal"
								type="number"
								onChange={foodSalesHandler}
							/>
						</Col>
					</FormGroup>
					<h2>Tips Collected</h2>
					{props.workingBartender.map((bartender, i) => (
						<FormGroup row key={i}>
							<Label sm={4}>{bartender}</Label>
							<Col sm={8}>
								<Input
									id={props.tips.bartenders.findIndex(
										(index) => index.value === bartender
									)}
									name="bar1TipTotal"
									type="number"
									onChange={barTipHandler}
								/>
							</Col>
						</FormGroup>
					))}
				</div>
			) : (
				<div>
					<FormGroup row key={""}>
						<Label sm={4}>Total Food Sales</Label>
						<Col sm={8}>
							<Input
								id={""}
								name="FoodSalesTotal"
								type="number"
								onChange={foodSalesHandler}
							/>
						</Col>
					</FormGroup>
					<h2>Tips Collected</h2>
					<FormGroup row>
						<Col>
							<Label className="sub-heading" sm={12}>
								Bartenders
							</Label>
						</Col>
						<Col>
							<Label className="sub-heading" sm={12}>
								Hours
							</Label>
						</Col>
						<Col>
							<Label className="sub-heading" sm={12}>
								Credit Card Tips
							</Label>
						</Col>
					</FormGroup>
					{props.workingBartender.map((bartender, i) => (
						<div>
							<FormGroup row key={i}>
								<Col>
									<Label className="align-name" sm={12}>
										{bartender}
									</Label>
								</Col>

								<Col sm={3}>
									<Input
										id={props.tips.bartenders.findIndex(
											(index) => index.value === bartender
										)}
										type="number"
										onChange={hoursHandler}
										onSubmit={addHoursHandler}
									></Input>
								</Col>
								<Col sm={4}>
									<Input
										id={props.tips.bartenders.findIndex(
											(index) => index.value === bartender
										)}
										name="bar1TipTotal"
										type="number"
										onChange={barTipHandler}
									/>
								</Col>
							</FormGroup>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CreditCardInputForm;
