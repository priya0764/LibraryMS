import React, { Component } from "react";
import BookService from "../services/bookService";
import DashboardNav from './dashboardnav';

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
      <React.Fragment>
        <DashboardNav/>
        <h2 style={{textAlign:"left", marginLeft:250}}>Add Book</h2>
        <div
          className="content-wrapper"
          style={{ minHeight: 757.08, textAlign: "left" }}
        >
          <section className="content">
            <div className="box box-mytheme">
              <div className="row">
                <div className="col-md-6">
                  <form onSubmit={this.handleSubmit}>
                    <div className="box-body">
                      <div className="form-group ">
                        <label htmlFor="bookId">Book Id</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="number"
                          className="form-control"
                          id="bookId"
                          name="bookId"
                          value={this.state.book.bookId}
                          onChange={this.handleChange}
                          placeholder="Enter book id"
                          required
                          autoFocus
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="title">Title</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          value={this.state.book.title}
                          onChange={this.handleChange}
                          placeholder="Enter title"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="subject">Subject</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={this.state.book.subject}
                          onChange={this.handleChange}
                          placeholder="Enter Subject"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="author">Author</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="author"
                          name="author"
                          value={this.state.book.author}
                          onChange={this.handleChange}
                          placeholder="Enter Author"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="publishedYear">Published Year</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="number"
                          className="form-control"
                          id="publishedYear"
                          name="publishedYear"
                          value={this.state.book.publishedYear}
                          onChange={this.handleChange}
                          placeholder="Enter Year"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="imageName">Cover Photo</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="imageName"
                          name="imageName"
                          value={this.state.book.imageName}
                          onChange={this.handleChange}
                          placeholder="Enter file Name (should end with .jpg)"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="isbnCode">Isbn No</label>
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="isbnCode"
                          name="isbnCode"
                          value={this.state.book.isbnCode}
                          onChange={this.handleChange}
                          placeholder="Enter ISBN Code"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="shelfDetails">Rack</label>
                        <span className="text-red">*</span>
                        <select
                          name="shelfDetails"
                          id="shelfDetails"
                          className="form-control"
                          value={this.state.book.shelfDetails}
                          onChange={this.handleChange}
                          placeholder="Enter Shelf"
                          required
                        >
                          <option value="0">Please Select</option>
                          <option value="5">E</option>
                          <option value="4">D</option>
                          <option value="3">C</option>
                          <option value="2">B</option>
                          <option value="1">A</option>
                        </select>
                      </div>

                      <div className="form-group ">
                        <label htmlFor="quantity">Quantity</label>
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="quantity"
                          name="quantity"
                          value={this.state.book.quantity}
                          onChange={this.handleChange}
                          placeholder="Enter Quantity"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="bookCost">Cost</label>
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control datepicker"
                          id="bookCost"
                          name="bookCost"
                          value={this.state.book.bookCost}
                          onChange={this.handleChange}
                          placeholder="Enter Cost"
                          required
                        />
                      </div>
                    </div>
                    <div className="box-footer">
                      <button type="submit" className="btn btn-dark" onClick={this.handleSubmit}>
                        Add Book
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger ml-3"
                        onClick={() => {
                          this.props.history.push("/book");
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default AddBook;
