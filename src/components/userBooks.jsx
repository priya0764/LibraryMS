import React, { Component } from "react";
import BookService from "../services/bookService";
import LogoutNavbar from "./logoutNavbar";

class UserBooksList extends Component {
  state = {
    books: [],
    book: {
        bookId: '',
        title: '',
        subject: '',
        author: '',
        publishedYear: '',
        imageName: ''
    },
  };

  componentDidMount() {
    BookService.getAllBooks().then((res) => {
      console.log("data: ", res.data);
      this.setState({ books: res.data });
    });
    console.log("books: ", this.state.books);
  }

  viewBookDetails = (title) =>{
    this.props.history.push(`/viewbook/${title}`)
  }
  render() {
    // let images = [
    //   "Harry Potter",
    //   "The Kite Runner",
    //   "Pride and Prejudice",
    //   "Wings of Fire",
    //   "The Adventure of Hukkleberry Finn",
    // ].map((image) => {
    //   return (
    //     <img
    //       className="img-responsive"
    //       alt=""
    //       src={`/images/${image}.jpg`}
    //     />
    //   );
    // });
    return (
      <div className="container-fluid">
        <LogoutNavbar />
        {/* {console.log(this.props.books)} */}
        <div className="row mt-3">
          <div className="col-md-10 mx-auto">
            <div className="row">
              {this.state.books.map((book) => (
                <div
                  key={book.bookId}
                  className="col-md-4 mb-4 d-flex align-items-stretch"
                >
                  <div className="card h-100" style={{ width: "16rem" }}>
                    <img
                      src={`/images/${book.imageName}`}
                      height="180px"
                      className="card-img-top"
                      alt=""
                      onClick={() => this.viewBookDetails(book.title)}
                    />
                    <div className="card-body">
                      <p className="card-title">{book.title}</p>
                      <p className="card-text float-center">{book.subject}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserBooksList;