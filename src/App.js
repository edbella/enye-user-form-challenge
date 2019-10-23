import React, { Component } from "react";
import Helmet from "react-helmet";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import store from "./store";
import "./App.css";
import Forms from "./components/Forms";
import DisplayUser from "./components/DisplayUser";

class App extends Component {
  /* state = {
    users: [],
    formSave: false
  };

  updateUser = user => {
    //console.log(newUser);
    const { users } = this.state;
    this.setState({ users: [...users, user], formSave: true });
  }; */

  render() {
    //const { users, formSave } = this.state;
    return (
      <Provider store={store}>
        <Container fluid={true} className="bodyStyle section-padding">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Edward Bella - Coding Challenge 2</title>
          </Helmet>

          <h6 className="text-center mb-4">
            Edward Bella - Enye Tech Coding Challenge 2
          </h6>
          <Row>
            <Col className="mx-auto mb-4" md={6}>
              <Forms />
            </Col>
            <Col className="mx-auto" md={10}>
              <DisplayUser />
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}
export default App;
