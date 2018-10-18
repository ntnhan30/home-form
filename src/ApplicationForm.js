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

  handleInputChange(stateFieldName, event) {
    let newState = {};
    newState[stateFieldName] = event.target.value;
    this.setState(newState);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(this.state.fullName);
    console.log(this.state.email);
    console.log(this.state.phoneNumber);
    console.log(this.state.salary);
    console.log("THIS IS TRIGGERED");
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            value={this.state.fullName}
            onChange={e => {
              this.handleInputChange("fullName", e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={this.state.email}
            onChange={e => {
              this.handleInputChange("email", e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="text"
            value={this.state.phoneNumber}
            onChange={e => {
              this.handleInputChange("phoneNumber", e);
            }}
          />
        </FormGroup>

        <FormGroup>
          <legend>Salary</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                value="0 - 1.000 €"
                checked={this.state.salary === "0 - 1.000 €"}
                onChange={e => {
                  this.handleInputChange("salary", e);
                }}
              />{" "}
              0 - 1.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                value="1.000 - 2.000 €"
                checked={this.state.salary === "1.000 - 2.000 €"}
                onChange={e => {
                  this.handleInputChange("salary", e);
                }}
              />{" "}
              1.000 - 2.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                value="2.000 - 3.000 €"
                checked={this.state.salary === "2.000 - 3.000 €"}
                onChange={e => {
                  this.handleInputChange("salary", e);
                }}
              />{" "}
              2.000 - 3.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                value="3.000 - 4.000 €"
                checked={this.state.salary === "3.000 - 4.000 €"}
                onChange={e => {
                  this.handleInputChange("salary", e);
                }}
              />{" "}
              3.000 - 4.000 €
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                value="Mehr als 4.000 €"
                checked={this.state.salary === "Mehr als 4.000 €"}
                onChange={e => {
                  this.handleInputChange("salary", e);
                }}
              />{" "}
              Mehr als 4.000 €
            </Label>
          </FormGroup>
        </FormGroup>
        <Button onClick={e => this.handleClick(e)}>Submit</Button>
      </Form>
    );
  }
}
