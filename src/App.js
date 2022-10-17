import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";
import TipBreakDown from "./components/TipBreakDown";

const App = () => {
	const enteredTips = {
		bartenders: [
			{ value: "", text: "Select Bartender", disabled: true },
			{ value: "Ashanti Rogers", text: "Ashanti Rogers", tipsCollected: 0 },
			{ value: "Michelle Rogers", text: "Michelle Rogers", tipsCollected: 0 },
			{ value: "David Perricone", text: "David Perricone", tipsCollected: 0 },
			{ value: "Hayley Pond", text: "Hayley Pond", tipsCollected: 0 },
			{ value: "Jose Verde", text: "Jose Verde", tipsCollected: 0 },
			{ value: "Kristin Lorenz", text: "Kristin Lorenz", tipsCollected: 0 },
			{ value: "Michael Martin", text: "Micheal Martin", tipsCollected: 0 },
			{
				value: "Rachel Van Der Pol",
				text: "Rachel Van Der Pol",
				tipsCollected: 0,
			},
			{ value: "Andre Jalaian", text: "Andre Jalaian", tipsCollected: 0 },
			{ value: "Erik Zinkel", text: "Erik Zinkel", tipsCollected: 0 },
		],
	};

	const [totalTipsCollected, setTotalTipsCollected] = useState(0);

	const [numberOfBartenders, setNumberOfBartenders] = useState(0);

	const [newWorkingBartenders, setWorkingBartender] = useState([]);

	const [isSubmited, setIsSubmited] = useState(false);

	const submitHandler = (inputedTips, numOfBartenders, totalTips) => {
		setTotalTipsCollected(inputedTips);
		setNumberOfBartenders(numOfBartenders);
	};

	const addWorkingBartenderHandler = (bartender) => {
		setWorkingBartender([...newWorkingBartenders, bartender]);
		setNumberOfBartenders(newWorkingBartenders.length + 1);
	};

	const removeWorkingBartender = (employee) => {
		const newList = newWorkingBartenders.filter(
			(bartender) => !bartender.includes(employee)
		);
		setWorkingBartender([...newList]);
	};

	const isSubmitedHandler = (submit) => {
		setIsSubmited(submit);
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
						isSubmited={isSubmited}
						isSubmitedHandler={isSubmitedHandler}
						bartenders={numberOfBartenders}
					/>
				</div>
			) : (
				<div className="bg1">
					<Header />
					<TipBreakDown
						tips={enteredTips}
						totalTips={totalTipsCollected}
						bartenders={numberOfBartenders}
						workingBartenders={newWorkingBartenders}
					/>
				</div>
			)}
		</React.Fragment>
	);
};
// test
export default App;
