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
import moment from "moment";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import axios from "axios";
import ModalForm from "./Model";

class AffilateProgramList extends React.Component {
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
        width: 90,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      {
        headerName: "Refer from",
        field: "refer_from_id.fullname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className=" mr-2">
              <span>{params.data.refer_from_id?.fullname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Email",
        field: "refer_from_id?.email",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className=" mr-2">
              <span>{params.data.refer_from_id?.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile No.",
        field: "refer_from_id?.mobile",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className=" mr-2">
              <span>{params.data.refer_from_id?.mobile}</span>
            </div>
          );
        },
      },

      {
        headerName: "Refer to",
        field: "refer_to_id.fullname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className=" mr-2">
              <span>{params.data.refer_to_id?.fullname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Email",
        field: "refer_to_id?.email",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className=" mr-2">
              <span>{params.data.refer_to_id?.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile No.",
        field: "refer_to_id?.mobile",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className=" mr-2">
              <span>{params.data.refer_to_id?.mobile}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Refered Amount",
      //   field: "refer_amount",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="ml-2 mr-2 align-items-center d-flex">
      //         <span>{params.data.refer_amount}</span>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Referral Code",
        field: "verify_code",
        filter: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-2 align-items-center d-flex">
              <span>{params.data.verify_code}</span>
            </div>
          );
        },
      },
      {
        headerName: "Status",
        field: "refer_redeem_status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "Pending" ? (
            <div className="badge badge-pill badge-warning ml-2">
              {params.data.refer_redeem_status}
            </div>
          ) : params.value === "Confirm" ? (
            <div className="badge badge-pill badge-success ml-2">
              {params.data.refer_redeem_status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "transactions",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <ModalForm />
            </div>
          );
        },
      },
      {
        headerName: "Date",
        field: "refer_amount",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="mr-2 align-items-center d-flex">
              <span>
                {moment(params.data.createdAt).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </span>
            </div>
          );
        },
      },

      // {
      //   headerName: "Actions",
      //   field: "transactions",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="actions cursor-pointer">

      //         {/* <Eye
      //             className="mr-50"
      //             size="20px"
      //             color="blue"
      //             onClick={() =>
      //               history.push(`/app/course/viewCourse/${params.data._id}`)
      //             }
      //           /> */}
      //         <Trash2
      //           size="20px"
      //           color="red"
      //           onClick={() => {
      //             let selectedData = this.gridApi.getSelectedRows();
      //             this.runthisfunction(params.data._id);
      //             this.gridApi.updateRowData({ remove: selectedData });
      //           }}
      //         />
      //       </div>
      //     );
      //   },
      // },
    ],
  };

  async componentDidMount() {
    await axios
      .get("http://65.0.80.5:5000/api/admin/allrefer_earn")
      .then((response) => {
        let rowData = response.data.data;
        console.log(rowData);
        this.setState({ rowData });
      });
  }

  // async runthisfunction(id) {
  //   console.log(id);
  //   await axiosConfig.get(`/dltwithdrwal/${id}`).then(response => {
  //     console.log(response);
  //   });
  // }
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
                  Affilate Program List
                </h1>
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
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
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
export default AffilateProgramList;
