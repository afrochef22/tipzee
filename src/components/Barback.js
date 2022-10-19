import React , { useState }from "react";
import {
	Form,
	Col,
	FormGroup,
	Input,
	Label,
	Button,
	Card,
	InputGroup,
} from "reactstrap";
import "./Barback.css"



const BarBack = (props) => {

const [selected, setSelected] = useState("");
const addWorkingBarBack = (e) => {
    props.newWorkingBarBack(e.target.value);
};

const removeHandler = (e) => {
    e.preventDefault();
    const inputVal = document.getElementById(e.target.value).value;
    props.removeWorkingBarBack(inputVal);
};

    return (<div>
        <FormGroup>
            <h2>Who is bar-backing?</h2>
            {props.workingBarBack.map((barBack, i) =>(
                <InputGroup
                className="select-bartender"
                key={barBack}
                onSubmit={removeHandler}
            >
                <Input readOnly defaultValue={barBack} id={barBack} />
                <Button
                    color="danger"
                    value={barBack}
                    onClick={removeHandler}
                >
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
                .filter(
                (barBack) =>
                !props.workingBarBack.includes(barBack.value)
                )
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
        </FormGroup>
    </div>)
}

export default BarBack;