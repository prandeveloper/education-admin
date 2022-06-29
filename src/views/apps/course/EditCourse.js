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

export class EditCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course_title: "",
      desc: "",
      long_desc: "",
      teacher: "",
      course_type: "",
      category_id: "",
      course_image: "",
      editorState: EditorState.createEmpty(),
      selectedFile: null,
      selectedName: "",
      teacherL: [],
      categ: [],
    };
  }
  async componentDidMount() {
    //teacherList
    axiosConfig
      .get("/approved_staff")
      .then((response) => {
        console.log(response);
        this.setState({ teacherL: response.data.data });
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
    //ViewOneCourse
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonecoursep/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          course_title: response.data.data.course_title,
          desc: response.data.data.desc,
          long_desc: response.data.data.long_desc,
          course_type: response.data.data.course_type,
          course_image: response.data.data.course_image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // Text Editor

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      long_desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    //console.log(this.state.editorState);
    console.log(this.state.long_desc);
  };

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("course_title", this.state.course_title);
    data.append("desc", this.state.desc);
    data.append("long_desc", this.state.long_desc);
    data.append("teacher", this.state.teacher);
    data.append("category_id", this.state.category_id);
    if (this.state.selectedFile !== null) {
      data.append(
        "course_image",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/updatecourse/${id}`, data)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch((error) => {
        console.log(error.message);
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
                Edit Course
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
                      placeholder="Teacher"
                      name="teacher"
                      value={this.state.teacher}
                      onChange={this.changeHandler}
                    >
                      <option>Select Teacher....</option>
                      {this.state.teacherL?.map((tech) => (
                        <option key={tech._id} value={tech._id}>
                          {tech.fullname}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Course Type</Label>
                    <CustomInput
                      type="select"
                      name="course_type"
                      value={this.state.course_type}
                      onChange={this.changeHandler}
                    >
                      <option>Select Course Type...</option>
                      <option>PAID</option>
                      <option>FREE</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Category</Label>
                    <CustomInput
                      type="select"
                      placeholder="Category"
                      name="category_id"
                      value={this.state.category_id}
                      onChange={this.changeHandler}
                    >
                      <option>Select Category...</option>
                      {this.state.categ.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.catName}
                        </option>
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
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
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
                    <Label>Course Image</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
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

export default EditCourse;
