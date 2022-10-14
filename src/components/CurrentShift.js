import React from "react";
import "./CurrentShift.css";

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

function CurrentShift() {
	return (
		<div className="center">
			<div>{ShiftDate()}</div>
			{/* <div>
				{hour < 6 ? (
					<div>
						<h1>{DayOfTheWeek(yesterday)}</h1>
						<h2>
							{`${
								month < 10 ? `0${month}` : `${month}`
							}/${yesterdayDate}/${year}`}
						</h2>
					</div>
				) : (
					<div>
						<h1>{DayOfTheWeek(day)}</h1>
						<h2>
							{`${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`}
						</h2>
					</div>
				)}
			</div> */}
		</div>
	);
}

function CurrentDate() {
	const newDate = new Date();
	const date = newDate.getDate();
	const month = newDate.getMonth() + 1;
	const year = newDate.getFullYear();
	const day = newDate.getDay();

	const yesterdayDate = newDate.getDate() - 1;
	const lastMonth = newDate.getMonth();
	const lastYear = newDate.getFullYear() - 1;
	const yesterday = newDate.getDay() - 1;

	const hour = newDate.getHours();
	const min =
		newDate.getMinutes() < 10
			? `0${newDate.getMinutes()}`
			: newDate.getMinutes();
	const time = hour + ":" + min;

	const dateData = {
		date,
		month,
		year,
		day,
		yesterdayDate,
		lastMonth,
		lastMonth,
		lastYear,
		yesterday,
		hour,
	};
	return dateData;
}

function ShiftDate(dateData) {
	dateData = CurrentDate();
	switch (true) {
		case dateData.hour < 7:
			dateData = `${
				dateData.month < 10 ? `0${dateData.month}` : `${dateData.month}`
			}/${dateData.yesterdayDate}/${dateData.year}`;
			break;

		default:
			dateData = `${
				dateData.month < 10 ? `0${dateData.month}` : `${dateData.month}`
			}/${dateData.date}/${dateData.year}`;
	}
	return dateData;
}

export default CurrentShift;
