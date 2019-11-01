import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

export const DisplayUser = () => {
  const db = useSelector(state => state.data.db);
  //var count = 0;
  console.log(db);

  const dbArr = Object.values(db);
  return (
    <Table responsive="md" striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Birthday</th>
          <th>Hobby</th>
        </tr>
      </thead>
      <tbody>
        {dbArr ? (
          dbArr.map(data => {
            return (
              <tr key={data.userID}>
                <td>{data.userID}</td>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.birth}</td>
                <td>{data.hobby}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>Please fill the form</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
