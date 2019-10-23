import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveForm } from "../actions/formActions";
import { Form, Button } from "react-bootstrap";

export class Forms extends Component {
  state = {
    user: [],
    formSave: false
  };

  handleSubmit = e => {
    const { user } = this.state;
    e.preventDefault();
    this.props.saveForm(user);
    e.target.fname.value = "";
    e.target.lname.value = "";
    e.target.email.value = "";
    e.target.age.value = "";
    e.target.birth.value = "";
    e.target.hobby.value = "";
    //this.props.formSave(formSave);
  };

  onChange = e => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
      formSave: true
    });
  };

  render() {
    return (
      <Form className="form shadow p-4 bg-white" onSubmit={this.handleSubmit}>
        <Form.Group controlId="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={this.onChange}
            type="text"
            placeholder="Enter your first name"
            name="fname"
            required={true}
          />
        </Form.Group>

        <Form.Group controlId="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={this.onChange}
            type="text"
            placeholder="Enter your last name"
            name="lname"
            required={true}
          />
        </Form.Group>

        <Form.Group controlId="birth">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            onChange={this.onChange}
            type="date"
            placeholder="Please input your birth date"
            name="birth"
            required={true}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.onChange}
            type="email"
            placeholder="john.doe@example.com"
            name="email"
            required={true}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onChange={this.onChange}
            type="number"
            placeholder="Your age"
            name="age"
            required={true}
          />
        </Form.Group>

        <Form.Group controlId="hobby">
          <Form.Label>Hobby</Form.Label>
          <Form.Control
            onChange={this.onChange}
            as="textarea"
            rows="4"
            placeholder="Please tell us about your hobbies"
            name="hobby"
            required={true}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

function matchDispatchToProps(dispatch) {
  bindActionCreators({ saveForm: saveForm }, dispatch);
}

export default connect(
  matchDispatchToProps,
  { saveForm }
)(Forms);
