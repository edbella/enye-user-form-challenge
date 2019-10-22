import React, { Component } from "react";
import { Table } from "react-bootstrap";

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
          {this.props.data.map(data => {
            return (
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.birthday}</td>
                <td>{data.hobby}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default DisplayUser;
