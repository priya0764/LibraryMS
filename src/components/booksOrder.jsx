import React, { Component } from "react";
import BooksOrderService from "../services/booksOrderService";
import { Link } from "react-router-dom";
import LogoutNavbar from "./logoutNavbar";

class BooksOrder extends Component {
  state = {
    booksOrderList: [],
    search: "",
    booksOrder: {
      orderId: "",
      quantity: "",
      orderDate: "",
      orderStatus: "",
      publications: "",
    },
  };

  componentDidMount() {
    BooksOrderService.getAllOrders().then((res) => {
      this.setState({ booksOrderList: res.data });
    });
    console.log("Books Order : ", this.state.booksOrderList);
  }

  viewOrderByQuantity = () => {
    let booksOrderList = [];
    BooksOrderService.getBooksOrderByquantity(this.state.search).then((res) => {
      booksOrderList = res.data;
    });
    this.setState({ booksOrderList });
    console.log("Books: " + this.state.booksOrder);
  };

  deleteOrder = (id) => {
    const booksOrderList = this.state.booksOrderList.filter(
      (booksOrder) => booksOrder.orderId !== id
    );
    this.setState({ booksOrderList });
    BooksOrderService.deleteOrder(id).then((res) =>
      this.props.history.push("/booksorder")
    );
  };

  handleUpdate = (id) => {
    this.props.history.push(`/booksorder/update/${id}`);
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <LogoutNavbar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-3 mt-4" style={{textAlign:"left", fontSize:18}}>
              <div className="main-slider-menu">
                <span className="sidebar-title">
                  <i className="bi bi-list"></i> My Account
                </span>
                <div className="slider-menu">
                  <ul>
                    <li>
                      <Link to="/adminPage">
                        <i className="bi bi-person-circle"></i> My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/booksorder">
                        <i className="bi bi-bag"></i> My Order
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
            <section className="content-header">
              <h2 style={{ textAlign: "left", fontFamily: "revert"}}>Order List</h2>
              <hr />
            </section>
            <section className="content" style={{ fontFamily: "revert" }}>
              <div className="box-head">
                <div className="d-flex justify-content-between mb-3">
                  <Link to="/booksorder/add" className="btn btn-dark">
                    <i className="fa fa-plus"></i> Place Order
                  </Link>
                  <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control ml-auto"
                  type="search"
                  name="subject"
                  placeholder="Search by subject"
                  aria-label="Search"
                  onChange={this.onChange}
                />
                <button
                  className="btn btn-success my-2 my-sm-0 ml-2 mr-5"
                  type="button"
                  onClick={() => this.getBooksOrderByQuantity(this.state.search)}
                >
                  Search
                </button>
              </form>
                </div>
              </div>
              <div className="box-body">
                <div id="hide-table">
                  <table
                    id="example1"
                    className="table table-bordered table-striped ml-4"
                    style={{ marginTop: 100 }}
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Quantity</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Publications</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.booksOrderList.map((booksOrder) => (
                        <tr>
                          <td data-title="#">{booksOrder.orderId}</td>
                          <td data-title="Quantity">{booksOrder.quantity}</td>
                          <td data-title="Order Date">
                            {booksOrder.orderDate}
                          </td>
                          <td data-title="Status">{booksOrder.orderStatus}</td>
                          <td data-title="Publications">
                            {booksOrder.publications}
                          </td>

                          <td data-title="Action">
                            {/* <button
                            type="button"
                            onClick={() =>
                              this.props.history.push(`/viewbooksorder/${booksOrder.quantity}`)
                            }
                            className="btn btn-success btn-xs"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <i className="fa fa-check-square-o"></i>
                          </button>{" "} */}
                            <button
                              type="button"
                              onClick={() =>
                                this.handleUpdate(booksOrder.orderId)
                              }
                              className="btn btn-warning btn-xs"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>{" "}
                            <button
                              type="button"
                              onClick={() =>
                                this.deleteOrder(booksOrder.orderId)
                              }
                              className="btn btn-danger btn-xs"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash-o"></i>
                            </button>{" "}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BooksOrder;
