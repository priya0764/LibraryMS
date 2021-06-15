import React, { Component } from "react";
import AuthorService from "../services/authorService";
import { Link } from "react-router-dom";
import DashboardNav from "./dashboardnav";
import "./raghu.css";

class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      search: "",
    };

    //this.updateAuthor = this.updateAuthor.bind(this);
    this.addAuthor = this.addAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.viewAuthor = this.viewAuthor.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
  }
  addAuthor() {
    this.props.history.push("/add-author");
  }

  viewAuthor(authorId) {
    this.props.history.push(`/view-author/${authorId}`);
  }

  updateAuthor(authorId) {
    this.props.history.push(`/update-author/${authorId}`);
  }

  getAuthorByName = (firstName) => {
    this.props.history.push(`/author-name/${firstName}`);
  };

  deleteAuthor(authorId) {
    AuthorService.deleteAuthor(authorId).then((res) => {
      this.setState({
        authors: this.state.authors.filter(
          (authors) => authors.authorId !== authorId
        ),
      });
    });
  }
  componentDidMount() {
    AuthorService.getAllAuthors().then((res) => {
      this.setState({ authors: res.data });
    });
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };
  render() {
    return (
      <div>
        <DashboardNav />

        <h2 className="text-center">Authors List</h2>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 300, marginTop: 25, width: 1200 }}
        >
          <Link to="/add-author" className="btn btn-success ">
            <i class="bi bi-plus-square" style={{ marginRight: 10 }}></i>Add
          </Link>
          <form
            className="form-inline my-2 my-lg-0"
            style={{ marginLeft: 500 }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              name="firstName"
              placeholder="Search by name"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-warning my-2 my-sm-0"
              style={{ marginRight: "200px" }}
              type="button"
              onClick={() => this.getAuthorByName(this.state.search)}
            >
              <i class="bi bi-search" style={{ marginRight: 10 }}></i>Search
            </button>
          </form>
        </div>
        <div className="row" class="drop">
          <table
            className="table table-sm table-striped  table-bordered "
            style={{ marginLeft: 250, marginTop: 90, width: 1200 }}
          >
            <thead class="thead-dark">
              <tr>
                <th>Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Mobile Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.authors.map((authors) => (
                <tr key={authors.authorId}>
                  <td>
                    <img
                      src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png"
                      alt=""
                      width="60"
                      height="60"
                    ></img>
                  </td>
                  <td>{authors.firstName}</td>
                  <td>{authors.lastName}</td>
                  <td>{authors.email}</td>
                  <td>{authors.contactno}</td>

                  <td>
                    <button
                      onClick={() => this.deleteAuthor(authors.authorId)}
                      className="btn btn-danger"
                    >
                      <i class="bi bi-trash-fill"></i> Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewAuthor(authors.authorId)}
                      className="btn btn-primary"
                    >
                      <i class="bi bi-eye-fill"></i>View
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.updateAuthor(authors.authorId)}
                      className="btn btn-secondary"
                    >
                      <i class="bi bi-pencil-square"></i> Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Author;
