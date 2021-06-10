import React, { Component } from "react";
import BooksOrderService from "../services/booksOrderService";

class AddBooksOrder extends Component {
  state = {
    booksOrder: {
      quantity: "",
      orderDate: "",
      orderStatus: "",
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
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="orderId">Order Id</label>
            <input
              type="text"
              className="form-control"
              id="orderId"
              name="orderId"
              value={this.state.booksOrder.orderId}
              onChange={this.handleChange}
              autoFocus
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
              value={this.state.booksOrder.quantity}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="orderDate" className="form-label">
              Order Date
            </label>
            <input
              type="text"
              className="form-control"
              id="orderDate"
              name="orderDate"
              value={this.state.booksOrder.orderDate}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="orderStatus" className="form-label">
              Order Status
            </label>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddBooksOrder;
