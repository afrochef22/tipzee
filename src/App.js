import React, { Component } from "react";
import Header from "./components/Header";
import TipsForm from "./components/TipForm";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<TipsForm />
			</React.Fragment>
		);
	}
}

export default App;
