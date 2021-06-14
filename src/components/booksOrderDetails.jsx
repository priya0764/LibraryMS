import React, { Component } from "react";
import BooksOrderService from "../services/booksOrderService";
import LogoutNavbar from "./logoutNavbar";
import { Link } from "react-router-dom";

class BooksOrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booksOrderList: [],
      booksOrder: {
        orderId: "",
        quantity: "",
        orderDate: "",
        orderStatus: "",
      },
    };
  }
  componentDidMount() {
    BooksOrderService.getBooksOrderById(this.props.match.params.id).then(
      (res) => {
        this.setState({ booksOrder: res.data });
      }
    );
    console.log("Books Order: ", this.state.booksOrder);
  }

  deleteOrder = (id) => {
    const booksOrderList = this.state.booksOrderList.filter(
      (booksOrder) => booksOrder.orderId !== id
    );
    this.setState({ booksOrderList });
    BooksOrderService.deleteOrder(id).then((res) =>
      this.props.history.push("/booksorder")
    );
  };

  handleChange = (event) => {
    event.preventDefault();
    const booksOrder = this.state.booksOrder;
    booksOrder[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ booksOrder });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.booksOrder);
    BooksOrderService.updateBooksOrder(
      this.props.match.params.id,
      this.state.booksOrder
    ).then((res) => this.props.history.push("/booksorder"));
  };

  render() {
    return (
      <React.Fragment>
        <LogoutNavbar />
        <div className="row" style={{marginTop:80}}>
          <div
            className="col-sm-2"
            style={{ textAlign: "left", fontSize: 18, marginLeft:200 }}
          >
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
          <div className="col-sm-5">
            <form onSubmit={this.handleSubmit}>
              <h2>{this.state.booksOrder.orderId}</h2>
              <div className="mb-3">
                <label htmlFor="quantity">Quantity</label>
                <span className="text-red">*</span>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={this.state.booksOrder.quantity}
                  onChange={this.handleChange}
                  autoFocus
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="orderDate" className="form-label">
                  Order Date
                </label>
                <span className="text-red">*</span>
                <input
                  type="date"
                  className="form-control"
                  id="orderDate"
                  name="orderDate"
                  value={this.state.booksOrder.orderDate}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="orderStatus" className="form-label">
                  Order Status
                </label>
                <span className="text-red">*</span>
                <input
                  type="text"
                  className="form-control"
                  id="orderStatus"
                  name="orderStatus"
                  value={this.state.booksOrder.orderStatus}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="publications" className="form-label">
                  Publications
                </label>
                <span className="text-red">*</span>
                <input
                  type="text"
                  className="form-control"
                  id="publications"
                  name="publications"
                  value={this.state.booksOrder.publications}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Update
              </button>
              <button
                className="btn btn-danger ml-2"
                onClick={() => this.deleteOrder(this.state.booksOrder.orderId)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary ml-2 float-right"
                onClick={() => {
                  this.props.history.push("/booksorder");
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BooksOrderDetails;
