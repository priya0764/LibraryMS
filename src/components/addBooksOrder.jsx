import React, { Component } from "react";
import BooksOrderService from "../services/booksOrderService";
import LogoutNavbar from "./logoutNavbar";

class AddBooksOrder extends Component {
  state = {
    booksOrder: {
      quantity: "",
      orderDate: "",
      orderStatus: "",
      publications: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    BooksOrderService.addBooksOrder(this.state.booksOrder).then((res) => {
      this.props.history.push("/booksorder");
    });
  };

  handleChange = (event) => {
    const booksOrder = { ...this.state.booksOrder };
    booksOrder[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ booksOrder });
  };

  render() {
    return (
      <React.Fragment>
        <LogoutNavbar />
        <div className="w-25 mx-auto">
          <section className="content-header">
            <h2 style={{ textAlign: "left", fontFamily: "revert" }}>
              Place Order
            </h2>
            <hr />
          </section>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3" style={{ textAlign: "left" }}>
              <label htmlFor="orderId">Order Id</label>
              <span className="text-red">*</span>
              <input
                type="number"
                className="form-control mb-2"
                id="orderId"
                name="orderId"
                value={this.state.booksOrder.orderId}
                onChange={this.handleChange}
                autoFocus
              />
              <label htmlFor="quantity">Quantity</label>
              <span className="text-red">*</span>
              <input
                type="number"
                className="form-control mb-2"
                id="quantity"
                name="quantity"
                value={this.state.booksOrder.quantity}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="orderDate" className="form-label">
                Order Date
              </label>
              <span className="text-red">*</span>
              <input
                type="date"
                className="form-control mb-2"
                id="orderDate"
                name="orderDate"
                value={this.state.booksOrder.orderDate}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="orderStatus" className="form-label">
                Order Status
              </label>
              <span className="text-red">*</span>
              <input
                type="text"
                className="form-control mb-2"
                id="orderStatus"
                name="orderStatus"
                value={this.state.booksOrder.orderStatus}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="orderStatus" className="form-label">
                Publications
              </label>
              <span className="text-red">*</span>
              <input
                type="text"
                className="form-control mb-2"
                id="publications"
                name="publications"
                value={this.state.booksOrder.publications}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-danger ml-3"
              onClick={() => {
                this.props.history.push("/booksorder");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddBooksOrder;
