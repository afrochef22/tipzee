import React from "react";
import "./CurrentDate.css";

function DayOfTheWeek(day) {
	switch (day) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
	}
	return day;
}

function CurrentDate() {
	let newDate = new Date();
	let date = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	const day = newDate.getDay();
	return (
		<div className="center">
			<h1>{DayOfTheWeek(day)}</h1>
			<h2>{`${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`}</h2>
		</div>
	);
}

export default CurrentDate;
