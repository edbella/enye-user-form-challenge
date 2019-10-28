import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
//import { saveForm } from "../actions/formActions";

export const DisplayUser = () => {
  const { users } = useSelector(state => state.users);
  var count = 0;
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
        {users.map(data => {
          return (
            <tr key={count++}>
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
};

/*const matchStateToProps = state => ({
  users: state.users.users
});*/
