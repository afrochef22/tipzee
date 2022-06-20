import {
	Form,
	Row,
	Col,
	FormGroup,
	Input,
	Label,
	FormText,
	Button,
} from "reactstrap";
import "./TipForm.css";

function TipsForm() {
	return (
		<div>
			<Form className="row-content">
				<FormGroup>
					<Label for="tipTotal" className="float">
						Total Credit Card Tips
					</Label>

					<Input id="tipTotal" name="tipTotal" for="text" />
				</FormGroup>

				<FormGroup>
					<Label for="bb1" className="float">
						Bar Back 1
					</Label>

					<Input id="bb1" name="bb1TipTotal" for="number" />
				</FormGroup>

				<FormGroup>
					<Label for="bb2" className="float">
						Bar Back 2
					</Label>

					<Input id="bb2" name="bb2TipTotal" for="number" />
				</FormGroup>

				<FormGroup>
					<Label for="bar1Tips" className="float">
						Bartender 1 Tips
					</Label>

					<Input id="bar1Tips" name="bar1TipTotal" for="number" />
				</FormGroup>

				<FormGroup>
					<Label for="bar2Tips" className="float">
						Bartender 2 Tips
					</Label>

					<Input id="bar2Tips" name="bar2TipTotal" for="number" />
				</FormGroup>

				<FormGroup>
					<Label for="bar3Tips" className="float">
						Bartender 3 Tips
					</Label>

					<Input id="bar3Tips" name="bar3TipTotal" for="number" />
				</FormGroup>

				<FormGroup>
					<Label for="bar4Tips" className="float">
						Bartender 4 Tips
					</Label>

					<Input id="bar4Tips" name="bar4TipTotal" for="number" />
				</FormGroup>

				<FormGroup>
					<Label for="bar5Tips" className="float">
						Bartender 5 Tips
					</Label>

					<Input id="bar5Tips" name="bar5TipTotal" for="number" />
				</FormGroup>

				<FormGroup>
					<Label for="bar6Tips" className="float">
						Bartender 6 Tips
					</Label>

					<Input id="bar6Tips" name="bar6TipTotal" for="number" />
				</FormGroup>
			</Form>
		</div>
	);
}

export default TipsForm;
