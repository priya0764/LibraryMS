import React, { Component } from "react";
import BooksOrderService from "../services/booksOrderService";
import { Link } from "react-router-dom";
import LogoutNavbar from './logoutNavbar';

class BooksOrder extends Component {
  state = {
    booksOrderList: [],
    search: "",
    booksOrder: {
        orderId: "",
        quantity: "",
        orderDate: "",
        orderStatus: "",
        publications:"",
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
      <React.Fragment>
        <LogoutNavbar/>
        <section className="content-header">
          <h2 style={{ textAlign: "left" }}>Order List</h2>
          <hr/>
        </section>
        <section className="content" style={{ fontFamily: "revert" }}>
          <div className="box-head">
            <div className="d-flex justify-content-between mb-3">
              <Link to="/booksorder/add" className="btn btn-dark">
                <i className="fa fa-plus"></i> Place Order
              </Link>
              {/* <form className="form-inline my-2 my-lg-0">
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
                  onClick={() => this.getBookBySubject(this.state.search)}
                >
                  Search
                </button>
              </form> */}
            </div>
            <div className="box-body">
              <div id="hide-table">
                <table
                  id="example1"
                  className="table table-bordered table-striped mt-2"
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
                        <td data-title="Order Date">{booksOrder.orderDate}</td>
                        <td data-title="Status">{booksOrder.orderStatus}</td>
                        <td data-title="Publications">{booksOrder.publications}</td>
                        
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
                            onClick={() => this.handleUpdate(booksOrder.orderId)}
                            className="btn btn-warning btn-xs"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <i className="fa fa-edit"></i>
                          </button>{" "}
                          <button
                            type="button"
                            onClick={() => this.deleteBook(booksOrder.orderId)}
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
          </div>
        </section>
      </React.Fragment>
      // <div>
      //   <h2 className="text-center mt-5">Books Order List</h2>
      //   <div className="w-75 mt-5 mx-auto">
      //     <div className="d-flex justify-content-between">
      //       <Link
      //         to="/booksorder/add"
      //         className="btn btn-success btn-large mb-1"
      //       >
      //         Add
      //       </Link>
      //       <form className="form-inline my-2 my-lg-0">
      //         <input
      //           className="form-control ml-auto"
      //           type="search"
      //           placeholder="Search"
      //           aria-label="Search"
      //           onChange={this.onChange}
      //         />
      //         <button
      //           className="btn btn-outline-success my-2 my-sm-0"
      //           type="button"
      //           onClick={this.viewOrderById}
      //         >
      //           Search
      //         </button>
      //       </form>
      //     </div>
      //     <div className="row mt-3">
      //       <table className="table table-striped table-bordered">
      //         <thead>
      //           <tr>
      //             <th>Quantity</th>
      //             <th>Order Date</th>
      //             <th>Order Status</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {this.state.booksOrderList.map((booksOrder) => (
      //             <tr key={booksOrder.orderId}>
      //               <td onClick={() => this.handleUpdate(booksOrder.orderId)}>
      //                 {booksOrder.quantity}
      //               </td>
      //               <td>{booksOrder.orderDate}</td>
      //               <td>{booksOrder.orderStatus}</td>
      //             </tr>
      //           ))}
      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default BooksOrder;