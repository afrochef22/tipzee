import React, { Component, useState } from "react";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";
import TipBreakDown from "./components/TipBreakDown";
import "./index.css";

const App = () => {
	const enteredTips = {
		totalTipsCollected: 0,
		totalTipsAfterBarbackTipOut: 0,
		barBackTips: 0,
		bartenderPosition: [
			{ bar: "Ashanti Rogers" },
			{ bar: "Michelle Rogers" },
			{ bar: "David Perricone" },
			{ bar: "Hayley Pond" },
			{ bar: "Jose Verde" },
			{ bar: "Kristin Lorenz" },
			{ bar: "Michael Martin" },
			{ bar: "Rachel Van Der Pol" },
			{ bar: "Andre Jalaian" },
			{ bar: "Erik Zinkel" },
		],
		bartenderTips: [
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
			{ bar: 0 },
		],
		bartenders: [
			"Michelle Rogers",
			"Erik Zinkel",
			"David Perricone",
			"Rachel Van der Pol",
			"Michael Martin",
			"Kristin Lorenz",
			"Hayley Pond",
			"Jose Verde",
			"Ashanti Rogers",
			"Andre Jalalian",
		],
	};

	const [totalTipsCollected, setTotalTipsCollected] = useState(0);
	console.log(totalTipsCollected);

	const [numberOfBartenders, setNumberOfBartenders] = useState(0);
	console.log(numberOfBartenders);

	const submitHandler = (inputedTips, numOfBartenders) => {
		console.log(inputedTips);
		setTotalTipsCollected(inputedTips);
		setNumberOfBartenders(numOfBartenders);
	};

	{
		return (
			<React.Fragment>
				{totalTipsCollected < 1 ? (
					<div className="bg1">
						<Header />
						<TipsForm tips={enteredTips} totalTips={submitHandler} />
					</div>
				) : (
					<div className="bg1">
						<Header />
						<TipBreakDown
							tips={enteredTips}
							totalTips={totalTipsCollected}
							bartenders={numberOfBartenders}
						/>
					</div>
				)}
			</React.Fragment>
		);
	}
};
// test
export default App;
