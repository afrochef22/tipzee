import React, { useState } from "react";
import {
	Form,
	Row,
	Col,
	FormGroup,
	Input,
	Label,
	FormText,
	Button,
} from "reactstrap";
import "./TipForm.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipsForm = (props) => {
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
		Number(bar5_Tips) +
		Number(bar7_Tips) +
		Number(bar8_Tips) +
		Number(bar9_Tips) +
		Number(bar10_Tips);

	const submitHandler = () => {
		props.onAddTips(tipSum);
	};

	return (
		<div className="bg1 height100">
			<Form className="row-content">
				<FormGroup row>
					<Label for="bar1Tips" sm={4}>
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
					<Label for="bar2Tips" sm={4}>
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

				<FormGroup row>
					<Label for="bar3Tips" sm={4}>
						Bartender 3 Tips
					</Label>

					<Col sm={8}>
						<Input
							id="bar3Tips"
							name="bar3TipTotal"
							type="number"
							onChange={bar3_TipHandler}
						/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar4Tips" sm={4}>
						Bartender 4 Tips
					</Label>

					<Col sm={8}>
						<Input
							id="bar4Tips"
							name="bar4TipTotal"
							type="number"
							onChange={bar4_TipHandler}
						/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar5Tips" sm={4}>
						Bartender 5 Tips
					</Label>

					<Col sm={8}>
						<Input
							id="bar5Tips"
							name="bar5TipTotal"
							type="number"
							onChange={bar5_TipHandler}
						/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar6Tips" sm={4}>
						Bartender 6 Tips
					</Label>

					<Col sm={8}>
						<Input
							id="bar6Tips"
							name="bar6TipTotal"
							type="number"
							onChange={bar6_TipHandler}
						/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="tipTotal" sm={4}>
						Total Credit Card Tips
					</Label>

					<Col sm={8}>
						<Input
							value={props.tips.totalTipsCollected}
							id="tipTotal"
							name="tipTotal"
							for="text"
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
		</div>
	);
};

export default TipsForm;
