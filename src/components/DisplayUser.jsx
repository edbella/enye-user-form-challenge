import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { saveForm } from "../actions/formActions";

export class DisplayUser extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Birthday</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map(data => {
            return (
              <tr>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.birth}</td>
                <td>{data.hobby}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const matchStateToProps = state => ({
  users: state.users.users
});

export default connect(
  matchStateToProps,
  { saveForm }
)(DisplayUser);
