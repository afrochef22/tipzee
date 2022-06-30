import React, { Component } from "react";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";

const App = () => {
	const tips = {
		bartenderTips: [
			{ bar1: "" },
			{ bar2: "" },
			{ bar3: "" },
			{ bar4: "" },
			{ bar5: "" },
			{ bar6: "" },
			{ bar7: "" },
			{ bar8: "" },
			{ bar9: "" },
			{ bar10: "" },
		],
		totalTipsCollected: "",
	};

	const addTipsHandler = (tips) => {
		console.log("form app.js");
		console.log(tips);
	};

	{
		return (
			<React.Fragment>
				<Header />
				<TipsForm onAddTips={addTipsHandler} tips={tips} />
			</React.Fragment>
		);
	}
};

export default App;
