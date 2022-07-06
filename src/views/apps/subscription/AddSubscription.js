import React, { Component } from "react";
import Store from "../../../assets/img/store/subs.jpg";
import { Button, Container, Form } from "reactstrap";
import "../../../assets/scss/pages/users.scss";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import { history } from "../../../history";
import { Route } from "react-router-dom";

export class AddSubscription extends Component {
  render() {
    return (
      <div>
        <Form className="m-1">
          <Container className="mb-0">
            <img src={Store} className="photo" alt="A store" />
          </Container>
          <Container className="d-flex justify-content-center align-items-center">
            <Route
              render={({ history }) => (
                <Button
                  color="danger"
                  className="mr-1 mb-1"
                  onClick={() =>
                    history.push("/app/subscription/choosePaymentOption")
                  }
                >
                  SUBSCRIBE NOW
                </Button>
              )}
            />
          </Container>
        </Form>
      </div>
    );
  }
}
export default AddSubscription;
