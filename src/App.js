import React, { Component } from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import "./App.css";
import Forms from "./components/Forms";

class App extends Component {
  state = {
    //users: [],
    formSave: false
  };

  /*updateUser = user => {
    //console.log(newUser);
    this.setState({ users: user, formSave: true });
  };*/

  formSave = () => {
    //console.log(newUser);
    this.setState({ formSave: true });
  };

  render() {
    return (
      <Container fluid={true} className="bodyStyle section-padding">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Edward Bella - Coding Challenge 1</title>
        </Helmet>

        <h6 className="text-center mb-4">
          Edward Bella - Enye Tech Coding Challenge 1
        </h6>

        <Forms
          /*updateUser={this.updateUser}*/
          formSave={this.formSave}
        />
      </Container>
    );
  }
}
export default App;
