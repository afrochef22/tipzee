import React, { useState } from "react";
import {
	Form,
	FormGroup,
	Button,
	Card,
} from "reactstrap";
import CurrentShift from "./CurrentShift";
import Bartender from "./Bartender";
import BarBack from "./Barback";
import Cook from "./Cook";
import CheckIfBreakdownByHours from "./CheckIfBreakdownByHours";
import CreditCardInputForm from "./CreditCardInputForm"
import "./TipForm.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TipsForm = (props) => {
	const [numberOfBartenders, setNumberOfBartenders] = useState(0);
	const [totalTipsCollected, setTotalTipsCollected] = useState(0);

	const backBtnHandler = (e) => {
		setNumberOfBartenders(0);
		setTotalTipsCollected(0);
	};

	const bartendersInfo = props.tips.bartenders.filter((bartender) => {
		return bartender.tipsCollected >= 0;
	});

	const submitHandler = (e) => {
		e.preventDefault();
		const list = bartendersInfo.map((post) => post.tipsCollected);
		const sum = list.reduce((x, y) => x + y);
		setTotalTipsCollected(sum);
		props.totalTips(sum, props.bartenders);
	};

	const submitHandler2 = () => {
		props.isSubmitedHandler(true);
	};


	return (
		<div className="bg1 height100">
			{props.isSubmited === false ? (
				<Card className="card-container">
					<CurrentShift />
					<CheckIfBreakdownByHours
						toggleTipsByHours={props.toggleTipsByHours}
						isHoursClicked={props.isHoursClicked}
						toggleBartenderByHours={props.toggleBartenderByHours}
						isBartenderHoursClicked={props.isBartenderHoursClicked}
						toggleBarBackByHours={props.toggleBarBackByHours}
						isBarBackHoursClicked={props.isBarBackHoursClicked}
						toggleCookByHours={props.toggleCookByHours}
						isCookHoursClicked={props.isCookHoursClicked}
					/>
					<Form>
						<FormGroup className="row-content card-container">
							<Cook
								tips={props.tips}
								workingCook={props.workingCook}
								newWorkingCook={props.newWorkingCook}
								removeWorkingCook={props.removeWorkingCook}
								workingBartender={props.workingBartender}
								workingBarBack={props.workingBarBack}
							/>
							<BarBack
								tips={props.tips}
								workingBarBack={props.workingBarBack}
								newWorkingBarBack={props.newWorkingBarBack}
								removeWorkingBarBack={props.removeWorkingBarBack}
								workingBartender={props.workingBartender}
								workingCook={props.workingCook}
							/>

							<Bartender
								tips={props.tips}
								workingBarBack={props.workingBarBack}
								newWorkingBartender={props.newWorkingBartender}
								removeWorkingBartender={props.removeWorkingBartender}
								workingBartender={props.workingBartender}
								workingCook={props.workingCook}
							/>
						</FormGroup>
					</Form>
					<Button
						className="submit-bartender-btn"
						size="lg"
						type="submit"
						onClick={submitHandler2}
					>
						Submit
					</Button>
				</Card>
			) : (
				<div className="bg1">
					<Card body className="card-container">
						<Form className="row-content">
							<CreditCardInputForm
								tips={props.tips}
								addFoodSales={props.addFoodSales} workingBartender={props.workingBartender}
								isBartenderHoursClicked={props.isBartenderHoursClicked}
								isBarBackHoursClicked={props.isBarBackHoursClicked}
								isCookHoursClicked={props.isCookHoursClicked}

							/>

							<FormGroup>
								<div m={8}>
									<Button
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
										Calculate Tips
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
