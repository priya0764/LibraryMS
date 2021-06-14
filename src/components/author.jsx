import React, { Component } from "react";
import AuthorService from "../services/authorService";
import {Link} from "react-router-dom";
import "./raghu.css";

class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      search: ""
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

  getAuthorByName=(firstName) => {
    this.props.history.push(`/author-name/${firstName}`)
  }

  deleteAuthor(authorId) {
    AuthorService.deleteAuthor(authorId).then((res) => {
      this.setState({
        authors: this.state.authors.filter(
          (author) => author.authorId !== authorId
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
        
        <h2 className="text-center">Authors List</h2>
        {/* <div className="row">
          <button className="btn btn-success mb-2" onClick={this.addAuthor}>
            Add
          </button>
        </div> */}
        <div className="d-flex justify-content-between">
            <Link to="/add-author" className="btn btn-success btn-large mb-1" style={{marginLeft : "200px" }} >
              Add
            </Link>
            <form className="form-inline my-2 my-lg-0">
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
                style={{marginRight : "200px" }} 
                type="button"
                onClick={() => this.getAuthorByName(this.state.search)}
              >
                Search
              </button>
            </form>
          </div>
        <div className="row" class="drop">
          <table className="table table-sm table-striped  table-bordered " style={{marginLeft : "200px" }} >
            <thead class="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Mobile Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.authors.map((author) => (
                <tr key={author.authorId}>
                  <td>{author.firstName}</td>
                  <td>{author.lastName}</td>
                  <td>{author.email}</td>
                  <td>{author.contactno}</td>

                  <td>
                    <button
                      onClick={() => this.deleteAuthor(author.authorId)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewAuthor(author.authorId)}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.updateAuthor(author.authorId)}
                      className="btn btn-secondary"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div><a class="btn btn-primary " style={{marginTop:"350px", marginLeft:"100px"}} href="\dashboard" role="button">Back</a></div>
        </div>
        
 
      </div>
    );
  }
}

export default Author;
