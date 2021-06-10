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
    this.props.history.push(`/book/get/subject/${subject}`)
  }

  handleUpdate = (id) => {
    this.props.history.push(`/book/update/${id}`);
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-center mt-5">Books List</h2>
        <div className="w-75 mt-5 mx-auto">
          <div className="d-flex justify-content-between">
            <Link to="/book/add" className="btn btn-success btn-large mb-1">
              Add
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
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={() => this.getBookBySubject(this.state.search)}
              >
                Search
              </button>
            </form>
          </div>
          <div className="row mt-3">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Subject</th>
                  <th>Author</th>
                  <th>Published Year</th>
                  <th>ISBN Code</th>
                  <th>Quantity</th>
                  <th>Book Cost</th>
                  <th>Shelf Details</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map((book) => (
                  <tr key={book.bookId}>
                    <td onClick={() => this.handleUpdate(book.bookId)}>
                      {book.title}
                    </td>
                    <td>{book.subject}</td>
                    <td>{book.author}</td>
                    <td>{book.publishedYear}</td>
                    <td>{book.isbnCode}</td>
                    <td>{book.quantity}</td>
                    <td>{book.bookCost}</td>
                    <td>{book.shelfDetails}</td>
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

export default Books;
