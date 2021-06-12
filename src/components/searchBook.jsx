import React, { Component } from "react";
import BookService from "../services/bookService";

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      subject: this.props.match.params.subject
    };
  }

  componentDidMount() {
    BookService.getBookBySubject(this.state.subject).then((res) => {
      this.setState({ books: res.data });
      console.log(this.state.books);
    });
  }
  render() {
    return (
      <div className="w-75 mt-5 mx-auto">
        <h2>{this.props.match.params.subject}</h2>
        <div className="row mt-3" style={{fontFamily:"sans-serif"}}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Cover Photo</th>
                <th>Title</th>
                <th>Subject</th>
                <th>Author</th>
                <th>Published Year</th>
                <th>ISBN Code</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th>Shelf Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => (
                <tr key={book.bookId}
                  onClick={()=>this.props.history.push(`/book/update/${book.bookId}`)}
                >
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
                  <td>{book.title}</td>
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
    );
  }
}

export default SearchBook;
