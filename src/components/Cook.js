import React, { useState } from "react";
import { FormGroup, Input, Button, InputGroup } from "reactstrap";
import Select from 'react-select';
import "./Cook.css";

const Cook = (props) => {
	const [selected, setSelected] = useState("");
	const addWorkingCook = (e) => {
		if (e.length < props.workingCook.length) {
            
            const l = e.map(cook => cook.value)
           
              
              const array1 = props.workingCook.filter(function(item) {
                return !l.includes(item); 
              })
              props.removeWorkingCook(array1);
               
                
        }  
         else{
            for (let i = 0; i < e.length; i++) {
                props.newWorkingCook(e[i].value);
                }
          
        }
	};

	const removeHandler = (e) => {
		e.preventDefault();
		const inputVal = document.getElementById(e.target.value).value;
		props.removeWorkingCook(inputVal);
	};

	const cooks = props.tips.cooks
	.filter(
		(bartender) => !props.workingBartender.includes(bartender.value)
	)
	.filter((barBack) => !props.workingBarBack.includes(barBack.value))
	.filter((cook) => !props.workingCook.includes(cook.value))
	.map((cook, i) => {
		return cook
	})

	return (
		<div>
			<FormGroup>
				<h2>Who is cooking?</h2>
				{/* {props.workingCook.map((cook, i) => (
					<InputGroup
						className="select-bartender"
						key={cook}
						onSubmit={removeHandler}
					>
						<Input readOnly defaultValue={cook} id={cook} />
						<Button color="danger" value={cook} onClick={removeHandler}>
							Remove
						</Button>
					</InputGroup>
				))}
				<Input
					id=""
					type="select"
					value={""}
					placeholder="Select a cook"
					onChange={addWorkingCook}
				>
					{props.tips.cooks
						.filter(
							(bartender) => !props.workingBartender.includes(bartender.value)
						)
						.filter((barBack) => !props.workingBarBack.includes(barBack.value))
						.filter((cook) => !props.workingCook.includes(cook.value))
						.map((cook, i) => (
							<option
								disabled={cook.disabled}
								key={cook.value}
								value={cook.value}
							>
								{cook.text}
							</option>
						))}
				</Input> */}

				<Select
                options={cooks}
                key={cooks.value}
                isMulti
                closeMenuOnSelect={false}
                allowSelectAll={true}
                hideSelectedOptions={false}
                placeholder="Select a cook"
                onChange={addWorkingCook}
                />
			</FormGroup>
		</div>
	);
};

export default Cook;
