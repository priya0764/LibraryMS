import React, { Component } from "react";
import BookService from "../services/bookService";
import UserNavbar from "./userNavbar";
import {Link} from 'react-router-dom'

class UserBooksList2 extends Component {
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
    this.props.history.push(`/viewBookUser/${title}`)
  }
  
  render() {
    return (
      <div className="container-fluid">
        <UserNavbar />
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
                      <p className="card-title" style={{fontStyle:"revert", fontSize:20}}>{book.title}</p>
                      <p className="card-text float-center">{book.subject}</p>
                      <Link className="btn btn-outline-success btn-sm" to={`/viewBookUser/${book.title}`}>
                          <i className="fa fa-eye"></i>
                        </Link>
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

export default UserBooksList2;