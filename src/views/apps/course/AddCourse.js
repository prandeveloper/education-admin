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
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";

export class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course_title: "",
      desc: "",
      teacher: "",
      long_desc: "",
      category: "",
      status: "",
      description: "",
      editorState: EditorState.createEmpty(),
      teacher: [],
      categ: [],
    };
  }
  async componentDidMount() {
    //teacherList
    axiosConfig
      .get("/approved_staff")
      .then((response) => {
        console.log(response);
        this.setState({ teacher: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    //Category
    axiosConfig
      .get("/allCat")
      .then((response) => {
        console.log(response);
        this.setState({ categ: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // Text Editor

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    console.log(this.state.editorState);
    //console.log(this.state.long_desc);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
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
    // const data = new FormData();
    // data.append("employee_name", this.state.employee_name);
    // data.append("phone_no", this.state.phone_no);
    // data.append("email", this.state.email);
    // data.append("password", this.state.password);
    // data.append("designation", this.state.designation);
    // data.append("sortorder", this.state.sortorder);
    // data.append("status", this.state.status);
    // if (this.state.selectedFile !== null) {
    //   data.append("image", this.state.selectedFile, this.state.selectedName);
    // }
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post("http://35.154.86.59/api/user/customersignup", this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/contactUs/customer/customerList");
      })
      .catch((error) => {
        console.log(error);
        swal("Error!", "Error Received", "error");
      });
    this.state.editorState.getCurrentContent().getPlainText();
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Course
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/course/courseList")}
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
                    <Label>Course Title</Label>
                    <Input
                      type="text"
                      placeholder="Course Name"
                      name="course_title"
                      value={this.state.course_title}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Teacher Name</Label>
                    <CustomInput
                      type="select"
                      placeholder="Full Name"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={this.changeHandler}
                    >
                      {this.state.teacher?.map((tech) => (
                        <option key={tech._id}>{tech.fullname}</option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Category</Label>
                    <CustomInput
                      type="select"
                      placeholder="Category"
                      name="category"
                      value={this.state.category}
                      onChange={this.changeHandler}
                    >
                      <option></option>
                      {this.state.categ.map((cat) => (
                        <option key={cat._id}>{cat.fullname}</option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      placeholder="Description"
                      name="mobile_no"
                      value={this.state.mobile_no}
                      onChange={this.changeHandler2}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Long Description</Label>
                    <Editor
                      required
                      toolbarClassName="demo-toolbar-absolute"
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      editorState={this.state.editorState}
                      onEditorStateChange={this.onEditorStateChange}
                      toolbar={{
                        options: [
                          "inline",
                          "blockType",
                          "fontSize",
                          "fontFamily",
                        ],
                        inline: {
                          options: [
                            "bold",
                            "italic",
                            "underline",
                            "strikethrough",
                            "monospace",
                          ],
                          bold: { className: "bordered-option-classname" },
                          italic: { className: "bordered-option-classname" },
                          underline: { className: "bordered-option-classname" },
                          strikethrough: {
                            className: "bordered-option-classname",
                          },
                          code: { className: "bordered-option-classname" },
                        },
                        blockType: {
                          className: "bordered-option-classname",
                        },
                        fontSize: {
                          className: "bordered-option-classname",
                        },
                        fontFamily: {
                          className: "bordered-option-classname",
                        },
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Image Upload</Label>
                    <CustomInput
                      type="file"
                      placeholder="Customer Email"
                      name="customer_email"
                      value={this.state.customer_email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="ml-2 mb-1"
                >
                  Add Course
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddCourse;
