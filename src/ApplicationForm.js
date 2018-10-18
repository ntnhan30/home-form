import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      salary: ""
    };
  }
  handleClick(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log("THIS IS TRIGGERED");
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullName"
            //id="exampleEmail"
            //  placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            //id="examplePassword"
            //  placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="text"
            name="Phone Number"
            //id="examplePassword"
            //  placeholder="password placeholder"
          />
        </FormGroup>

        <FormGroup>
          <legend>Salary</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> 0 - 1.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> 1.000 - 2.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> 2.000 - 3.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> 3.000 - 4.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Mehr als 4.000 €
            </Label>
          </FormGroup>
        </FormGroup>
        <Button onClick={e => this.handleClick(e)}>Submit</Button>
      </Form>
    );
  }
}
