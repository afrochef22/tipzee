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
			{ value: "Aaron Montaigne", text: "Aaron Montaigne", tipsCollected: 0 },
			{ value: "Charlie Miller", text: "Charlie Miller", tipsCollected: 0 },
			{ value: "Tony Crouse", text: "Tony Crouse", tipsCollected: 0 },
		],

		barBacks: [
			// { value: "", label: "Select Bar-back", disabled: true },
			{ value: "Carlos Cardenas", label: "Carlos Cardenas" },
			{ value: "Jose Verde", label: "Jose Verde" },
			{ value: "Ashanti Rogers", label: "Ashanti Rogers" },
		],

		cooks: [
			{ value: "", text: "Select Cook", disabled: true },
			{ value: "Francisco Cardenas", text: "Francisco Cardenas" },
			{ value: "Chuey", text: "Chuey" },
			{ value: "Ashanti Rogers", text: "Ashanti Rogers" },
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

	const addWorkingBarBackHandler = (barBack) => {
		setWorkingBarBack([...workingBarBack, barBack]);
		setNumberOfBarBacks(workingBarBack.length + 1);
	};

	const removeWorkingBarBack = (employee) => {
		const newList = workingBarBack.filter(
			(barBack) => !barBack.includes(employee)
		);
		setWorkingBarBack([...newList]);
	};

	const removeAllBarBacks = ()=>{
		setWorkingBarBack([])
		setNumberOfBarBacks(0)
	} 

	const addWorkingCookHandler = (cook) => {
		setWorkingCook([...workingCook, cook]);
		setNumberOfCooks(workingCook.length + 1);
	};

	const removeWorkingCook = (employee) => {
		console.log(employee);
		const newList = workingCook.filter((cook) => !cook.includes(employee));
		console.log(newList);
		setWorkingCook([...newList]);
	};

	const isSubmitedHandler = (submit) => {
		setIsSubmited(submit);
	};

	const addFoodSalesHandler = (sales) => {
		setTotalFoodSales(sales);
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
						removeAllBarBacks={removeAllBarBacks}
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
