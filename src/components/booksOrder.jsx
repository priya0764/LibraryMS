import React, { Component } from "react";
import BooksOrderService from "../services/booksOrderService";
import { Link } from "react-router-dom";

class BooksOrder extends Component {
  state = {
    booksOrderList: [],
    search: "",
    booksOrder: {
        orderId: "",
        quantity: "",
        orderDate: "",
        orderStatus: "",
      },
  };

  componentDidMount() {
    BooksOrderService.getAllOrders().then((res) => {
      this.setState({ booksOrderList: res.data });
    });
    console.log("Books Order : ", this.state.booksOrderList);
  }

  viewOrderById = () => {
    let booksOrderList = [];
    BooksOrderService.getBooksOrderById(this.state.search).then((res) => {
      booksOrderList = res.data;
    });
    this.setState({ booksOrderList });
    console.log("Books: " + this.state.booksOrder);
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
      <div>
        <h2 className="text-center mt-5">Books Order List</h2>
        <div className="w-75 mt-5 mx-auto">
          <div className="d-flex justify-content-between">
            <Link
              to="/booksorder/add"
              className="btn btn-success btn-large mb-1"
            >
              Add
            </Link>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control ml-auto"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={this.viewOrderById}
              >
                Search
              </button>
            </form>
          </div>
          <div className="row mt-3">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Order Date</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.booksOrderList.map((booksOrder) => (
                  <tr key={booksOrder.orderId}>
                    <td onClick={() => this.handleUpdate(booksOrder.orderId)}>
                      {booksOrder.quantity}
                    </td>
                    <td>{booksOrder.orderDate}</td>
                    <td>{booksOrder.orderStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksOrder;