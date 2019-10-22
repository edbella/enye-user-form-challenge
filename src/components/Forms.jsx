import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DisplayUser from "./DisplayUser";

export class Forms extends Component {
  state = {
    user: [],
    formSave: false
  };

  handleSubmit = e => {
    e.preventDefault();

    const firstName = this.refs.fname.value,
      lastName = this.refs.lname.value,
      email = this.refs.email.value,
      age = this.refs.age.value,
      birthday = this.refs.birth.value,
      hobby = this.refs.hobby.value,
      user = this.state.user,
      formSave = this.state.formSave;

    const newUser = {
      firstName,
      lastName,
      email,
      age,
      birthday,
      hobby
    };

    this.setState({
      user: [...user, newUser],
      formSave: true
    });

    //this.props.updateUser(user);
    this.props.formSave(formSave);

    this.refs.fname.value = "";
    this.refs.lname.value = "";
    this.refs.email.value = "";
    this.refs.age.value = "";
    this.refs.birth.value = "";
    this.refs.hobby.value = "";
  };

  render() {
    const { user, formSave } = this.state;
    return (
      <Row>
        <Col className="mx-auto" md={6}>
          <Form
            className="form shadow p-4 bg-white"
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId="fname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                ref="fname"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="lname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                ref="lname"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="birth">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                placeholder="Please input your birth date"
                ref="birth"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="john.doe@example.com"
                ref="email"
                required={true}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Your age"
                ref="age"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="hobby">
              <Form.Label>Hobby</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Please tell us about your hobbies"
                ref="hobby"
                required={true}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="mx-auto" md={6}>
          {formSave ? <DisplayUser data={user} /> : console.log("No user yet")}
        </Col>
      </Row>
    );
  }
}

export default Forms;
