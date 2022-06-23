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

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TipsForm() {
	return (
		<div className="bg1 height100">
			<Form className="row-content">
				<FormGroup row>
					<Label for="bar1Tips" sm={4}>
						Bartender 1 Tips
					</Label>

					<Col sm={8}>
						<Input id="bar1Tips" name="bar1TipTotal" for="number" />
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar2Tips" sm={4}>
						Bartender 2 Tips
					</Label>

					<Col sm={8}>
						<Input id="bar2Tips" name="bar2TipTotal" for="number" />
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar3Tips" sm={4}>
						Bartender 3 Tips
					</Label>

					<Col sm={8}>
						<Input id="bar3Tips" name="bar3TipTotal" for="number" />
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar4Tips" sm={4}>
						Bartender 4 Tips
					</Label>

					<Col sm={8}>
						<Input id="bar4Tips" name="bar4TipTotal" for="number" />
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar5Tips" sm={4}>
						Bartender 5 Tips
					</Label>

					<Col sm={8}>
						<Input id="bar5Tips" name="bar5TipTotal" for="number" />
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="bar6Tips" sm={4}>
						Bartender 6 Tips
					</Label>

					<Col sm={8}>
						<Input id="bar6Tips" name="bar6TipTotal" for="number" />
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="tipTotal" sm={4}>
						Total Credit Card Tips
					</Label>

					<Col sm={8}>
						<Input id="tipTotal" name="tipTotal" for="text" />
					</Col>
				</FormGroup>
				<Col className="btn-center">
					<Button className="button-block bg2" size="lg">
						Submit
					</Button>
				</Col>
			</Form>
		</div>
	);
}

export default TipsForm;
