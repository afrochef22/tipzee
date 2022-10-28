import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";
import TipBreakDown from "./components/TipBreakDown";

const App = () => {
	const enteredTips = {
		bartenders: [
			// { value: "", text: "Select Bartender", disabled: true },
			{ value: "Ashanti Rogers", label: "Ashanti Rogers", tipsCollected: 0 },
			{ value: "Michelle Rogers", label: "Michelle Rogers", tipsCollected: 0 },
			{ value: "David Perricone", label: "David Perricone", tipsCollected: 0 },
			{ value: "Hayley Pond", label: "Hayley Pond", tipsCollected: 0 },
			{ value: "Jose Verde", label: "Jose Verde", tipsCollected: 0 },
			{ value: "Kristin Lorenz", label: "Kristin Lorenz", tipsCollected: 0 },
			{ value: "Michael Martin", label: "Micheal Martin", tipsCollected: 0 },
			{
				value: "Rachel Van Der Pol",
				label: "Rachel Van Der Pol",
				tipsCollected: 0,
			},
			{ value: "Andre Jalaian", label: "Andre Jalaian", tipsCollected: 0 },
			{ value: "Erik Zinkel", label: "Erik Zinkel", tipsCollected: 0 },
			{ value: "Aaron Montaigne", label: "Aaron Montaigne", tipsCollected: 0 },
			{ value: "Charlie Miller", label: "Charlie Miller", tipsCollected: 0 },
			{ value: "Tony Crouse", label: "Tony Crouse", tipsCollected: 0 },
		],

		barBacks: [
			// { value: "", label: "Select Bar-back", disabled: true },
			{ value: "Carlos Cardenas", label: "Carlos Cardenas" },
			{ value: "Jose Verde", label: "Jose Verde" },
			{ value: "Ashanti Rogers", label: "Ashanti Rogers" },
		],

		cooks: [
			// { value: "", text: "Select Cook", disabled: true },
			{ value: "Francisco Cardenas", label: "Francisco Cardenas" },
			{ value: "Chuey", label: "Chuey" },
			{ value: "Ashanti Rogers", label: "Ashanti Rogers" },
		],
	};

	const [totalFoodSales, setTotalFoodSales] = useState(0);

	const [totalTipsCollected, setTotalTipsCollected] = useState(0);

	const [numberOfBartenders, setNumberOfBartenders] = useState(0);

	const [numberOfBarBacks, setNumberOfBarBacks] = useState(0);

	const [numberOfCooks, setNumberOfCooks] = useState(0);

	const [newWorkingBartenders, setWorkingBartender] = useState([]);

	const [workingBarBack, setWorkingBarBack] = useState([]);

	const [workingCook, setWorkingCook] = useState([]);

	const [isSubmited, setIsSubmited] = useState(false);

	const [isHoursClicked, setIsHoursClicked] = useState(false);

	const [isBartenderHoursClicked, setIsBartenderHoursClicked] = useState(false)

	const [isBarBackHoursClicked, setIsBarBackHoursClicked] = useState(false)

	const [isCookHoursClicked, setIsCookHoursClicked] = useState(false)

	const submitHandler = (inputedTips, numOfBartenders, totalTips) => {
		setTotalTipsCollected(inputedTips);
		setNumberOfBartenders(numOfBartenders);
	};

	const addWorkingBartenderHandler = (bartender) => {
		setWorkingBartender([...newWorkingBartenders, bartender]);
		setNumberOfBartenders(newWorkingBartenders.length + 1);
	};

	const removeWorkingBartender = (employee) => {
		if (employee.length > 1) {
			setWorkingBartender([]);
		} else {
			const newList = newWorkingBartenders.filter(
				(bartender) => !bartender.includes(employee)
			);
			setWorkingBartender([...newList]);
		}
	};

	const addWorkingBarBackHandler = (barBack) => {
		setWorkingBarBack([...workingBarBack, barBack]);
		setNumberOfBarBacks(workingBarBack.length + 1);
	};

	const removeWorkingBarBack = (employee) => {
		if (employee.length > 1) {
			setWorkingBarBack([]);
		} else {
			const newList = workingBarBack.filter(
				(barBack) => !barBack.includes(employee)
			);
			setWorkingBarBack([...newList]);
		}
	};

	const addWorkingCookHandler = (cook) => {
		setWorkingCook([...workingCook, cook]);
		setNumberOfCooks(workingCook.length + 1);
	};

	const removeWorkingCook = (employee) => {
		if (employee.length > 1) {
			setWorkingCook([]);
		} else {
			const newList = workingCook.filter((cook) => !cook.includes(employee));
			setWorkingCook([...newList]);
		}
	};

	const isSubmitedHandler = (submit) => {
		setIsSubmited(submit);
	};

	const addFoodSalesHandler = (sales) => {
		setTotalFoodSales(sales);
	};

	const toggleTipsByHours = () => {
		isHoursClicked === true
			? setIsHoursClicked(false)
			: setIsHoursClicked(true);
		console.log("hours clicked", isHoursClicked)
	};

	const toggleBartenderByHours = () => {
		isBartenderHoursClicked === true
			? setIsBartenderHoursClicked(false)
			: setIsBartenderHoursClicked(true);
		console.log("Bartender", isBartenderHoursClicked)
	};

	const toggleBarBackByHours = () => {
		isBarBackHoursClicked === true
			? setIsBarBackHoursClicked(false)
			: setIsBarBackHoursClicked(true);
		console.log("BarBack", isBarBackHoursClicked)
	};

	const toggleCookByHours = () => {
		isCookHoursClicked === true
			? setIsCookHoursClicked(false)
			: setIsCookHoursClicked(true);
		console.log("cook", isCookHoursClicked)
	};

	return (
		<React.Fragment>
			{totalTipsCollected < 1 ? (
				<div className="bg1">
					<Header />
					<TipsForm
						tips={enteredTips}
						workingBartender={newWorkingBartenders}
						newWorkingBartender={addWorkingBartenderHandler}
						removeWorkingBartender={removeWorkingBartender}
						bartenders={numberOfBartenders}
						workingBarBack={workingBarBack}
						newWorkingBarBack={addWorkingBarBackHandler}
						removeWorkingBarBack={removeWorkingBarBack}
						workingCook={workingCook}
						newWorkingCook={addWorkingCookHandler}
						removeWorkingCook={removeWorkingCook}
						totalTips={submitHandler}
						isSubmited={isSubmited}
						isSubmitedHandler={isSubmitedHandler}
						addFoodSales={addFoodSalesHandler}
						toggleTipsByHours={toggleTipsByHours}
						isHoursClicked={isHoursClicked}
						toggleBartenderByHours={toggleBartenderByHours}
						isBartenderHoursClicked={isBartenderHoursClicked}
						toggleBarBackByHours={toggleBarBackByHours}
						isBarBackHoursClicked={isBarBackHoursClicked}
						toggleCookByHours={toggleCookByHours}
						isCookHoursClicked={isCookHoursClicked}
					/>
				</div>
			) : (
				<div className="bg1">
					<Header />
					<TipBreakDown
						tips={enteredTips}
						totalTips={totalTipsCollected}
						totalFoodSales={totalFoodSales}
						bartenders={numberOfBartenders}
						workingBartenders={newWorkingBartenders}
						numberOfBarBacks={numberOfBarBacks}
						numberOfCooks={numberOfCooks}
						workingBarBack={workingBarBack}
						workingCook={workingCook}
						isSubmited={isSubmited}
						isSubmitedHandler={isSubmitedHandler}
					/>
				</div>
			)}
		</React.Fragment>
	);
};
// test
export default App;
