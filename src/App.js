import React, { Component, useState } from "react";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";

const App = () => {
	const enteredTips = {
		totalTipsCollected: 0,
		totalTipsAfterBarbackTipOut: 0,
		barBackTips: 0,
		bartenderPosition: [
			{ bar: "Bartender 1 Tips" },
			{ bar: "Bartender 2 Tips" },
			{ bar: "Bartender 3 Tips" },
			{ bar: "Bartender 4 Tips" },
			{ bar: "Bartender 5 Tips" },
			{ bar: "Bartender 6 Tips" },
			{ bar: "Bartender 7 Tips" },
			{ bar: "Bartender 8 Tips" },
			{ bar: "Bartender 9 Tips" },
			{ bar: "Bartender 10 Tips" },
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
	};
	const [totalTipsCollected, setTotalTipsCollected] = useState(0);
	const submitHandler = (inputedTips) => {
		enteredTips.totalTipsCollected = inputedTips;
	};

	{
		return (
			<React.Fragment>
				<Header />
				<TipsForm tips={enteredTips} totalTips={submitHandler} />
			</React.Fragment>
		);
	}
};

export default App;
