import React, { Component } from "react";
import BookService from "../services/bookService";

class AddBook extends Component {
  state = {
    book: {
      title: "",
      subject: "",
      author: "",
      publishedYear: "",
      isbnCode: "",
      quantity: "",
      bookCost: "",
      shelfDetails: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    BookService.addBook(this.state.book).then((res) => {
      this.props.history.push("/book");
    });
  };

  handleChange = (event) => {
    const book = { ...this.state.book };
    book[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ book });
  };

  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleSubmit}>
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
              required
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.book.title}
              onChange={this.handleChange}
              required
            />
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
              required
            />
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
              required
            />
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
              required
            />
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
              required
            />
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
              required
            />
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
              required
            />

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

export default AddBook;
