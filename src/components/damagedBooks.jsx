import React, { Component } from "react";
import DamagedBooksService from "../services/damagedBooksService";
import { Link } from "react-router-dom";
import DashboardNav from './dashboardnav';

class DamagedBooks extends Component {
  state = {
    damagedBooks: [],
    damagedBook: {
      id: "",
      quantity: "",
      description: "",
    },
  };
  componentDidMount() {
    DamagedBooksService.getAllDamagedBooks().then((res) => {
      this.setState({ damagedBooks: res.data });
      console.log(this.state.damagedBooks);
    });
    console.log("Damaged Books:", this.state.damagedBooks);
  }

  viewDamagedBookById = () => {
    let damagedBooks = [];
    DamagedBooksService.getDamagedBookById(this.state.search).then((res) => {
      damagedBooks = res.data;
    });
    this.setState({ damagedBooks });
    console.log("Damaged Books: " + this.state.damagedBook);
  };

  deleteDamagedBook = (id) => {
    const damagedBooks = this.state.damagedBooks.filter(
      (damagedBook) => damagedBook.id !== id
    );
    this.setState({ damagedBooks });
    DamagedBooksService.deleteDamagedBook(id).then(
      (res) => this.props.history.push("/damagedbook")
      );
  };

  handleUpdate = (id) => {
    this.props.history.push(`/damagedbook/update/${id}`);
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <DashboardNav/>
        <section className="content-header" style={{marginLeft:230}}>
          <h2 style={{ textAlign: "left" }}>Damaged Books List</h2>
          <hr />
        </section>
        <section className="content" style={{ fontFamily: "revert" }}>
          <div className="box-head">
            <div className="d-flex justify-content-between" style={{marginLeft:230}}>
              <Link to="/damagedbook/add" className="btn btn-dark">
                <i className="fa fa-plus"></i> Add Damaged Book
              </Link>
            </div>
            <div className="box-body">
              <div id="hide-table">
                <table
                  id="example1"
                  className="table table-bordered table-striped"
                  style={{ marginTop: 100, marginLeft:250, width:1230}}
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Quantity</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.damagedBooks.map((damagedBook) => (
                      <tr>
                        <td data-title="#">{damagedBook.id}</td>
                        <td data-title="Quantity">{damagedBook.quantity}</td>
                        <td data-title="Order Date">{damagedBook.description}</td>
                        <td data-title="Action">
                          {/* <button
                            type="button"
                            onClick={() =>
                              this.props.history.push(`/viewdamagedBook/${damagedBook.quantity}`)
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
                              this.handleUpdate(damagedBook.id)
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
                            onClick={() => this.deleteBook(damagedBook.orderId)}
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
    );
  }
}

export default DamagedBooks;
