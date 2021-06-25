import React, { Component } from "react";
import BooksReturnedService from "../services/booksReturnedService";
import { Link } from "react-router-dom";
import DashboardNav from "./dashboardnav";
import book7 from "./pictures/book7.png";

class BooksReturned extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booksReturned: [],
      search: "",
    };

    this.updateReturnedBooks = this.updateReturnedBooks.bind(this);
    this.addReturnedBooks = this.addReturnedBooks.bind(this);
    this.deleteReturnedBooks = this.deleteReturnedBooks.bind(this);
    this.viewReturnedBooks = this.viewReturnedBooks.bind(this);
  }

  addReturnedBooks() {
    this.props.history.push("/add-returned");
  }

  viewReturnedBooks(id) {
    this.props.history.push(`/view-returned/${id}`);
  }

  updateReturnedBooks(id) {
    this.props.history.push(`/update-returned/${id}`);
  }

  getReturnedBooksByDelayedDays = (delayedDays) => {
    this.props.history.push(`returnedBooks-delayed/${delayedDays}`);
  };

  deleteReturnedBooks(id) {
    BooksReturnedService.deleteReturnedBooks(id).then((res) => {
      this.setState({
        booksReturned: this.state.booksReturned.filter(
          (returned) => returned.id !== id
        ),
      });
    });
  }

  componentDidMount() {
    BooksReturnedService.getAllReturnedBooks().then((res) => {
      this.setState({ booksReturned: res.data });
    });
  }
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        <h2 className="text-center">ReturnedBooks List</h2>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 300 }}
        >
          <Link to="/add-returned" className="btn btn-success btn-large mb-1">
            <i class="bi bi-plus-square"></i> Add
          </Link>
        </div>
        <div className="row">
          <table
            className="table table-sm table-striped table-bordered"
            style={{ marginLeft: 300, marginTop: 51, width: 1200 }}
          >
            <thead className="thead-dark">
              <tr>
                <th>Photo</th>
                <th>Returned Date</th>
                <th>Delayed Days</th>
                <th>Penalty</th>
                <th>Penalty Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.booksReturned.map((returnedBooks) => (
                <tr key={returnedBooks.id}>
                  <td>
                    <img src={book7} alt="" width="70" height="60"></img>
                  </td>
                  <td>{returnedBooks.returnedDate}</td>
                  <td>{returnedBooks.delayedDays}</td>
                  <td>{returnedBooks.penalty}</td>
                  <td>{returnedBooks.penalty_Status}</td>

                  <td>
                    <button
                      onClick={() => this.deleteReturnedBooks(returnedBooks.id)}
                      className="btn btn-danger"
                    >
                      <i class="bi bi-trash-fill"></i>Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewReturnedBooks(returnedBooks.id)}
                      className="btn btn-primary"
                    >
                      <i class="bi bi-eye-fill"></i>View
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.updateReturnedBooks(returnedBooks.id)}
                      className="btn btn-secondary"
                    >
                      <i class="bi bi-pencil-square"></i>Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default BooksReturned;
