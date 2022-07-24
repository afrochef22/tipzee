import React, { useState } from "react";
import { Form, Col, FormGroup, Input, Label, Button } from "reactstrap";
import "./TipForm.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipsForm = (props) => {
	const [numberOfBartnders, setNumberOfBartenders] = useState(0);

	const numberOfBartendersHandler = (e) => {
		console.log(e);
		setNumberOfBartenders(e);
	};

	const [bar1_Tips, setBar1_Tip] = useState("");
	const [bar2_Tips, setBar2_Tip] = useState("");
	const [bar3_Tips, setBar3_Tip] = useState("");
	const [bar4_Tips, setBar4_Tip] = useState("");
	const [bar5_Tips, setBar5_Tip] = useState("");
	const [bar6_Tips, setBar6_Tip] = useState("");
	const [bar7_Tips, setBar7_Tip] = useState("");
	const [bar8_Tips, setBar8_Tip] = useState("");
	const [bar9_Tips, setBar9_Tip] = useState("");
	const [bar10_Tips, setBar10_Tip] = useState("");

	const bar1_TipHandler = (event) => {
		setBar1_Tip(event.target.value);
	};
	const bar2_TipHandler = (event) => {
		setBar2_Tip(event.target.value);
	};
	const bar3_TipHandler = (event) => {
		setBar3_Tip(event.target.value);
	};
	const bar4_TipHandler = (event) => {
		setBar4_Tip(event.target.value);
	};
	const bar5_TipHandler = (event) => {
		setBar5_Tip(event.target.value);
	};
	const bar6_TipHandler = (event) => {
		setBar6_Tip(event.target.value);
	};
	const bar7_TipHandler = (event) => {
		setBar7_Tip(event.target.value);
	};
	const bar8_TipHandler = (event) => {
		setBar8_Tip(event.target.value);
	};
	const bar9_TipHandler = (event) => {
		setBar9_Tip(event.target.value);
	};
	const bar10_TipHandler = (event) => {
		setBar10_Tip(event.target.value);
	};

	const tipSum =
		Number(bar1_Tips) +
		Number(bar2_Tips) +
		Number(bar3_Tips) +
		Number(bar4_Tips) +
		Number(bar5_Tips) +
		Number(bar6_Tips) +
		Number(bar7_Tips) +
		Number(bar8_Tips) +
		Number(bar9_Tips) +
		Number(bar10_Tips);

	const submitHandler = () => {
		props.totalTips(tipSum);
	};

	return (
		<div className="bg1 height100">
			{numberOfBartnders === 0 ? (
				<Form className="row-content">
					<FormGroup sm={4}>
						<Label for="exampleSelect">How many bartenders?</Label>
						<Input id="exampleSelect" name="select" type="select">
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
					<Button onClick={numberOfBartendersHandler}>Submit</Button>
				</Form>
			) : (
				<Form className="row-content">
					<FormGroup row>
						<Label htmlFor="bar1Tips" sm={4}>
							Bartender 1 Tips
						</Label>

						<Col sm={8}>
							<Input
								id="bar1Tips"
								name="bar1TipTotal"
								type="number"
								onChange={bar1_TipHandler}
							/>
						</Col>
					</FormGroup>

					<FormGroup row>
						<Label htmlFor="bar2Tips" sm={4}>
							Bartender 2 Tips
						</Label>

						<Col sm={8}>
							<Input
								id="bar2Tips"
								name="bar2TipTotal"
								type="number"
								onChange={bar2_TipHandler}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col className="btn-center">
							<Button
								onClick={submitHandler}
								className="button-block bg2"
								size="lg"
							>
								Submit
							</Button>
						</Col>
					</FormGroup>
				</Form>
			)}
		</div>
	);
};

export default TipsForm;
