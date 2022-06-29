import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
  FormGroup,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
export class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      password: "",
      cnfmPassword: "",
      userimg: "",
      user_status: "",
      selectedFile: null,
      selectedName: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewoneuser/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          password: response.data.data.password,
          cnfmPassword: response.data.data.cnfmPassword,
          userimg: response.data.data.userimg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ user_status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler2 = (e) => {
    if (e.target.value.length < 11)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfmPassword);
    data.append("user_status", this.state.user_status);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/edituser/${id}`, data)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push("/app/student/studentList");
      })
      .catch((error) => {
        console.log(error.response);
        swal("Error!", "Error Received", "error");
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Student
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/student/studentList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Full Name</Label>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Image</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile Number</Label>
                    <Input
                      type="number"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.changeHandler2}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      name="cnfmPassword"
                      value={this.state.cnfmPassword}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-1 ">
                  <FormGroup>
                    <Label className="mb-1">Approved Status</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler1(e)}
                    >
                      <input
                        style={{ marginRight: "3px", fontWeight: 800 }}
                        type="radio"
                        name="user_status"
                        value="true"
                      />
                      <span style={{ marginRight: "20px", fontWeight: 800 }}>
                        True
                      </span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="user_status"
                        value="false"
                      />
                      <span style={{ marginRight: "3px" }}>False</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="ml-2 mb-1"
                >
                  Update
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditStudent;
