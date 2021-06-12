import React, { Component } from "react";
import BookService from "../services/bookService";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
    search: "",
    book: {},
  };

  componentDidMount() {
    BookService.getAllBooks().then((res) => {
      console.log("data: ", res.data);
      this.setState({ books: res.data });
    });
    console.log("books: ", this.state.books);
  }

  getBookBySubject = (subject) => {
    this.props.history.push(`/getbook/subject/${subject}`);
  };

  handleUpdate = (id) => {
    this.props.history.push(`/book/update/${id}`);
  };

  deleteBook = (id) => {
    const books = this.state.books.filter((book) => book.bookId !== id);
    this.setState({ books });
    BookService.deleteBook(id).then((res) => this.props.history.push("/book"));
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <section className="content-header">
          <h2 style={{ textAlign: "left" }}>Book</h2>
          <hr />
        </section>
        <section className="content" style={{fontFamily:"revert"}}>
          <div className="mt-5 mx-auto">
            <div className="d-flex justify-content-between mb-3">
              <Link to="/book/add" className="btn btn-dark">
                <i className="fa fa-plus"></i> Add Book
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
                onClick={() => this.getBookBySubject(this.state.search)}
              >
                Search
              </button>
            </form>
            </div>
            <div className="box-body">
              <div id="hide-table">
                <table
                  id="example1"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Cover Photo</th>
                      <th>Title</th>
                      <th>Subject</th>
                      <th>Author</th>
                      <th>Published Year</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.books.map((book) => (
                      <tr>
                        <td data-title="#">{book.bookId}</td>
                        <td data-title="Cover Photo">
                          <img
                            width="80"
                            height="80"
                            src={`./images/${book.imageName}`}
                            className="rounded"
                            alt=""
                          />
                        </td>
                        <td data-title="Title">{book.title}</td>
                        <td data-title="Subject">{book.subject}</td>
                        <td data-title="Author">{book.author}</td>
                        <td data-title="Published Year">
                          {book.publishedYear}
                        </td>
                        <td data-title="Quantity">{book.quantity}</td>
                        <td data-title="Action">
                          <button
                            type="button"
                            onClick={() =>
                              this.props.history.push(`/viewbook/${book.title}`)
                            }
                            className="btn btn-success btn-xs"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <i className="fa fa-check-square-o"></i>
                          </button>{" "}
                          <button
                            type="button"
                            onClick={() => this.handleUpdate(book.bookId)}
                            className="btn btn-warning btn-xs"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <i className="fa fa-edit"></i>
                          </button>{" "}
                          <button
                            type="button"
                            onClick={() => this.deleteBook(book.bookId)}
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
      </div>
    );
  }
}

export default Books;
