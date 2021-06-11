import React, { Component } from "react";
import BookService from "../services/bookService";

class BookDetails extends Component {
  state = {
    books: [],
      book: {
        bookId: '',
        title: '',
        subject: '',
        author: '',
        publishedYear: '',
        isbnCode: '',
        quantity: '',
        bookCost: '',
        shelfDetails: '',
      },
    };
  
  componentDidMount() {
    BookService.getBookById(this.props.match.params.id).then((res) => 
      this.setState({ book: res.data })
    );
    console.log("book: ", this.state.book);
  }
  
  deleteBook = (id) => {
    const books = this.state.books.filter(
      (book) => book.bookId !== id
    );
    this.setState({books})
    BookService.deleteBook(id).then(
      (res) => this.props.history.push("/book")
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    const book = this.state.book;
    book[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ book });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.book);
    BookService.updateBook(this.props.match.params.id, this.state.book).then(
      (res) => this.props.history.push("/book")
    );
  };

  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <h2>{this.state.book.bookId}</h2>
          <div className="mb-3">
            <label htmlFor="bookId">Book Id</label>
            <input
              type="text"
              className="form-control"
              id="bookId"
              name="bookId"
              value={this.state.book.bookId}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.book.title}
              onChange={this.handleChange}
              //autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={this.state.book.subject}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={this.state.book.author}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="publishedYear" className="form-label">
              Published Year
            </label>
            <input
              type="text"
              className="form-control"
              id="publishedYear"
              name="publishedYear"
              value={this.state.book.publishedYear}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="isbnCode" className="form-label">
              ISBN Code
            </label>
            <input
              type="text"
              className="form-control"
              id="isbnCode"
              name="isbnCode"
              value={this.state.book.isbnCode}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
              value={this.state.book.quantity}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookCost" className="form-label">
              Book Cost
            </label>
            <input
              type="text"
              className="form-control"
              id="bookCost"
              name="bookCost"
              value={this.state.book.bookCost}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="shelfDetails" className="form-label">
              Shelf Details
            </label>
            <input
              type="text"
              className="form-control"
              id="shelfDetails"
              name="shelfDetails"
              value={this.state.book.shelfDetails}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Update
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => this.deleteBook(this.state.book.bookId)}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary ml-2 float-right"
            onClick={() => {
              this.props.history.push("/book");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default BookDetails;