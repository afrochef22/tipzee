import React, { useState } from "react";
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
import CurrentShift from "./CurrentShift";
import "./TipForm.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipsForm = (props) => {
	const [numberOfBartenders, setNumberOfBartenders] = useState(0);
	const [totalTipsCollected, setTotalTipsCollected] = useState(0);

	const numberOfBartendersHandler = (e) => {
		setNumberOfBartenders(e.target.value);
	};

	const backBtnHandler = (e) => {
		setNumberOfBartenders(0);
		setTotalTipsCollected(0);
	};

	const barTips = props.tips.bartenderTips;

	const submitHandler = (e) => {
		e.preventDefault();
		const list = barTips.map((post) => post.bar);
		const sum = list.reduce((x, y) => x + y);
		setTotalTipsCollected(sum);
		props.totalTips(sum, numberOfBartenders);
	};
	const tipsArray = [];
	const barTipHandler = (e) => {
		let value = e.target.value;
		for (let i = -1; i < e.target.id; i++) {
			if ((i = e.target.id)) {
				props.tips.bartenderTips[i].bar = Number(value);
			}
		}
	};
	const [selected, setSelected] = useState("");
	const addWorkingBartender = (e) => {
		props.newWorkingBartender(e.target.value);
	};

	const removeHandler = (e) => {
		e.preventDefault();
		const inputVal = document.getElementById(e.target.value).value;
		props.removeWorkingBartender(inputVal);
	};

	return (
		<div className="bg1 height100">
			<Card className="card-container">
				<CurrentShift />
				<Form>
					<FormGroup className="row-content card-container">
						<h2 htmlFor="exampleSelect">Who is bartending?</h2>
						{props.workingBartender.map((bartender, i) => (
							<InputGroup key={bartender} onSubmit={removeHandler}>
								<Input readOnly defaultValue={bartender} id={bartender} />
								<Button
									color="danger"
									value={bartender}
									onClick={removeHandler}
								>
									Remove
								</Button>
							</InputGroup>
						))}
						<Input
							id=""
							type="select"
							value={selected}
							placeholder="Select a bartender"
							onChange={addWorkingBartender}
						>
							{props.tips.bartenders
								.filter(
									(bartender) =>
										!props.workingBartender.includes(bartender.value)
								)
								.map((bartender, i) => (
									<option
										disabled={bartender.disabled}
										key={bartender.value}
										value={bartender.value}
									>
										{bartender.text}
									</option>
								))}
						</Input>
					</FormGroup>
				</Form>
				<Button className="button-block bg2" size="lg" type="submit">
					Button
				</Button>
			</Card>

			{numberOfBartenders < 1 ? (
				<Card className="card-container">
					<CurrentShift />
					<Form className="row-content card-container" onSubmit={submitHandler}>
						<FormGroup sm={4}>
							<h2 htmlFor="exampleSelect">Add Bartender?</h2>

							<Input
								id="exampleSelect"
								name="select"
								type="select"
								onChange={numberOfBartendersHandler}
							>
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</Input>
						</FormGroup>
					</Form>
				</Card>
			) : (
				<div className="bg1">
					<Card body className="card-container">
						<Form className="row-content">
							<h2>Tips Collected</h2>
							{props.tips.bartenderPosition
								.slice(0, numberOfBartenders)
								.map((bartender, i) => (
									<FormGroup row key={i}>
										<Label sm={4}>{bartender.bar}</Label>
										<Col sm={8}>
											<Input
												id={i}
												name="bar1TipTotal"
												type="number"
												onChange={barTipHandler}
											/>
										</Col>
									</FormGroup>
								))}

							<FormGroup>
								<div m={8} className="btn-center">
									<Button
										sm="true"
										onClick={backBtnHandler}
										className="button-block bg2"
										size="lg"
										type="submit"
									>
										Back
									</Button>
									<Button
										onClick={submitHandler}
										className="button-block bg2"
										size="lg"
										type="submit"
									>
										Submit
									</Button>
								</div>
							</FormGroup>
						</Form>
					</Card>
				</div>
			)}
		</div>
	);
};

export default TipsForm;
