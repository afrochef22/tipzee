import React, { useState } from "react";
import { FormGroup, Input, Button, InputGroup } from "reactstrap";
import Select from 'react-select';
import "./Barback.css";

const BarBack = (props) => {
	const [selected, setSelected] = useState("");

	const addWorkingBarBack = (e) => {
     
        
        if (e.length < props.workingBarBack.length) {
            console.log("less than so I'm removing", e,)
            console.log(props.workingBarBack, e)
            
            const l = e.map(barBack => barBack.value)
           
              console.log(l)
              
              const array1 = props.workingBarBack.filter(function(item) {
                return !l.includes(item); 
              })
              console.log(array1)
              props.removeWorkingBarBack(array1);
               
                
        }else{
            for (let i = 0; i < e.length; i++) {
                props.newWorkingBarBack(e[i].value);
                }
          
        }
        
	};
    console.log("working bar-backs",props.workingBarBack)

	const removeHandler = (e) => {
		e.preventDefault();
		const inputVal = document.getElementById(e.target.value).value;
		props.removeWorkingBarBack(inputVal);
	};

    const barBacks = props.tips.barBacks
						.filter((cook) => !props.workingCook.includes(cook.value))
						.filter(
							(bartender) => !props.workingBartender.includes(bartender.value)
						)
						.filter((barBack) => !props.workingBarBack.includes(barBack.value))
						.map((barBack, i) => {
                            return barBack
                        })
						

	return (
		<div>
			<FormGroup>
				<h2>Who is bar-backing?</h2>
				{/* {props.workingBarBack.map((barBack, i) => (
					<InputGroup
						className="select-bartender"
						key={barBack}
						onSubmit={removeHandler}
					>
						<Input readOnly defaultValue={barBack} id={barBack} />
						<Button color="danger" value={barBack} onClick={removeHandler}>
							Remove
						</Button>
					</InputGroup>
				))}
				<Input
					id=""
					type="select"
					value={""}
					placeholder="Select a bar-back"
					onChange={addWorkingBarBack}
				>
					{props.tips.barBacks
						.filter((cook) => !props.workingCook.includes(cook.value))
						.filter(
							(bartender) => !props.workingBartender.includes(bartender.value)
						)
						.filter((barBack) => !props.workingBarBack.includes(barBack.value))
						.map((barBack, i) => (
							<option
								disabled={barBack.disabled}
								key={barBack.value}
								value={barBack.value}
							>
								{barBack.text}
							</option>
						))}
				</Input>
             */}
                <Select
                options={barBacks}
                key={barBacks.value}
                isMulti
                closeMenuOnSelect={false}
                allowSelectAll={true}
                hideSelectedOptions={false}
                
                // disabled={barBack.disabled}
                // key={barBack.value}
                // value={barBack.value}
                placeholder="Select a bar-back"
                onChange={addWorkingBarBack}
                />
                       
                
			</FormGroup>
		</div>
	);
};

export default BarBack;
