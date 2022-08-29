import React, { Component, useState } from "react";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";

const App = () => {
	const enteredTips = {
		totalTipsCollected: 0,
		totalTipsAfterBarbackTipOut: 0,
		barBackTips: 0,
		bartenderTips: [
			{ bar1: 0 },
			{ bar2: 0 },
			{ bar3: 0 },
			{ bar4: 0 },
			{ bar5: 0 },
			{ bar6: 0 },
			{ bar7: 0 },
			{ bar8: 0 },
			{ bar9: 0 },
			{ bar10: 0 },
		],
	};

	const submitHandler = (inputedTips) => {
		console.log(inputedTips);
		enteredTips.totalTipsCollected = inputedTips;
	};

	const addTipsHandler = (enteredTips) => {
		console.log("form app.js");
		console.log(enteredTips);
	};

	{
		return (
			<React.Fragment>
				<Header />
				<TipsForm
					onAddTips={addTipsHandler}
					tips={enteredTips}
					totalTips={submitHandler}
				/>
			</React.Fragment>
		);
	}
};
// test
export default App;
