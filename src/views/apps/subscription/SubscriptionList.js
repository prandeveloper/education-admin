import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import moment from "moment";
import { Route } from "react-router-dom";

class SubscriptionList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      {
        headerName: "Image",
        field: "student_Id.userimg",
        filter: false,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <img
                className="rounded-circle  mr-4"
                src={params.data.student_Id?.userimg}
                alt="img"
                height="40"
                width="40"
              />
            </div>
          );
        },
      },

      {
        headerName: "FullName",
        field: "student_Id.fullname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.student_Id?.fullname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Email",
        field: "student_Id.email",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="mr-2">
              <span>{params.data.student_Id?.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile No.",
        field: "student_Id.mobile",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.student_Id?.mobile}</span>
            </div>
          );
        },
      },

      {
        headerName: "Plan",
        field: "plan_Id.plantitle",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.plan_Id?.plantitle}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date",
        field: "plan_Id.createdAt",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{moment(params.data.plan_Id?.createdAt).format("ll")}</span>
            </div>
          );
        },
      },
      //   {
      //     headerName: "Actions",
      //     field: "transactions",
      //     width: 150,
      //     cellRendererFramework: params => {
      //       return (
      //         <div className="actions cursor-pointer">
      //           {/* <Eye
      //             className="mr-50"
      //             size="20px"
      //             color="blue"
      //             onClick={() =>
      //               history.push(`/app/teacher/viewTeacher/${params.data._id}`)
      //             }
      //           /> */}
      //           <Edit
      //             className="mr-50"
      //             size="20px"
      //             color="blue"
      //             onClick={() =>
      //               history.push(`/app/teacher/editTeacher/${params.data._id}`)
      //             }
      //           />
      //           <Trash2
      //             size="20px"
      //             color="red"
      //             onClick={() => {
      //               let selectedData = this.gridApi.getSelectedRows();
      //               this.runthisfunction(params.data._id);
      //               this.gridApi.updateRowData({ remove: selectedData });
      //             }}
      //           />
      //         </div>
      //       );
      //     },
      //   },
    ],
  };

  async componentDidMount() {
    await axiosConfig.get("/allenrollStudent").then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/deletestaff/${id}`).then((response) => {
      console.log(response);
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Teacher List
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-danger float-right"
                      onClick={() => history.push("/app/teacher/addTeacher")}
                    >
                      Add New Teacher
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Route
                          render={({ history }) => (
                            <Button.Ripple
                              color="primary"
                              onClick={() => this.gridApi.exportDataAsCsv()}
                            >
                              Export as CSV
                            </Button.Ripple>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default SubscriptionList;
