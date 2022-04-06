import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";

class ViewCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonecoursep/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Course Detail
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
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={this.state.data.course_image}
                  alt="Google Home"
                  height="200"
                  width="250"
                />
              </Col>
              <Col md="7" sm="12">
                <h3>{this.state.data.course_title}</h3>
                <h6 className="">by {this.state.data.teacher?.fullname}</h6>
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">
                    {/* {this.state.data?.rate[0]?.rate} */}
                  </h3>
                </div>
                <hr />
                <h4>Short Description </h4>
                <h6>{this.state.data.desc}</h6>
                <hr />
                <h4>Long Description </h4>
                <h6>{this.state.data.long_desc}</h6>
                <hr />
                <h4>Course Popularity</h4>
                <h6>{this.state.data.popularity}</h6>
                <hr />
                <h4>Category </h4>
                <h6>{this.state.data.category_id}</h6>
                <hr />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewCourse;
