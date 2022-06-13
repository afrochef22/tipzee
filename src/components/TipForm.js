import { Form, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";

function TipsForm() {
	return (
		<div>
			<Form>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="name">Name</Label>
							<Input id="name" name="name" placeholder="name" type="name" />
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
								id="examplePassword"
								name="password"
								placeholder="password placeholder"
								type="password"
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label for="exampleAddress">Address</Label>
					<Input
						id="exampleAddress"
						name="address"
						placeholder="1234 Main St"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleAddress2">Address 2</Label>
					<Input
						id="exampleAddress2"
						name="address2"
						placeholder="Apartment, studio, or floor"
					/>
				</FormGroup>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleCity">City</Label>
							<Input id="exampleCity" name="city" />
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label for="exampleState">State</Label>
							<Input id="exampleState" name="state" />
						</FormGroup>
					</Col>
					<Col md={2}>
						<FormGroup>
							<Label for="exampleZip">Zip</Label>
							<Input id="exampleZip" name="zip" />
						</FormGroup>
					</Col>
				</Row>
				<FormGroup check>
					<Input id="exampleCheck" name="check" type="checkbox" />
					<Label check for="exampleCheck">
						Check me out
					</Label>
				</FormGroup>
				<Button>Sign in</Button>
			</Form>
		</div>
	);
}

export default TipsForm;
