import React, { Component, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";
import TipBreakDown from "./components/TipBreakDown";

const App = () => {
	const enteredTips = {
		totalTipsCollected: 0,
		totalTipsAfterBarbackTipOut: 0,
		barBackTips: 0,
		bartenderPosition: [
			{ bar: "None" },
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
			{ value: "", text: "Select Bartender", disabled: true },
			{ value: "Ashanti Rogers", text: "Ashanti Rogers" },
			{ value: "Michelle Rogers", text: "Michelle Rogers" },
			{ value: "David Perricone", text: "David Perricone" },
			{ value: "Hayley Pond", text: "Hayley Pond" },
			{ value: "Jose Verde", text: "Jose Verde" },
			{ value: "Kristin Lorenz", text: "Kristin Lorenz" },
			{ value: "Michael Martin", text: "Micheal Martin" },
			{ value: "Rachel Van Der Pol", text: "Rachel Van Der Pol" },
			{ value: "Andre Jalaian", text: "Andre Jalaian" },
			{ value: "Erik Zinkel", text: "Erik Zinkel" },
		],

		workingBartenders: [],
	};

	const [totalTipsCollected, setTotalTipsCollected] = useState(0);

	const [numberOfBartenders, setNumberOfBartenders] = useState(0);

	const [newWorkingBartenders, setWorkingBartender] = useState([]);

	const submitHandler = (inputedTips, numOfBartenders, totalTips) => {
		console.log(inputedTips);
		setTotalTipsCollected(inputedTips);
		setNumberOfBartenders(numOfBartenders);
	};

	const addWorkingBartenderHandler = (bartender) => {
		// enteredTips.workingBartenders.push(bartender);
		setWorkingBartender([...newWorkingBartenders, bartender]);
	};

	const removeWorkingBartender = (employee) => {
		console.log("app", employee, newWorkingBartenders);
		const newList = newWorkingBartenders.filter((bartender) =>
			bartender.includes(employee)
		);
		setWorkingBartender([newList]);
		console.log(newWorkingBartenders, newList);
	};

	return (
		<React.Fragment>
			{totalTipsCollected < 1 ? (
				<div className="bg1">
					<Header />
					<TipsForm
						tips={enteredTips}
						workingBartender={newWorkingBartenders}
						removeWorkingBartender={removeWorkingBartender}
						totalTips={submitHandler}
						newWorkingBartender={addWorkingBartenderHandler}
					/>
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
};
// test
export default App;
