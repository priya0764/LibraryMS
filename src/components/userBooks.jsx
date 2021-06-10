import React, { Component } from "react";
import BookService from '../services/bookService'

class UserBooksList extends Component {
  state = {
    books: [],
    book: {},
  };

  componentDidMount() {
    BookService.getAllBooks().then((res) => {
      console.log("data: ", res.data);
      this.setState({ books: res.data });
    });
    console.log("books: ", this.state.books);
  }



  render() {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 mt-3 g-4">
          {this.state.books.map((book) => (
            <div className="col mb-3">
              <div className="card h-100 mt-3 mb-3">
                <img src="" className="card-img-top" alt={book.subject} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    {book.author}<br/>
                    {book.publishedYear}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      //   <div className="container-fluid">
      //     {console.log(this.props.books)}
      //     <div className="row mt-3">
      //       <div className="col-md-10">
      //         <div className="row">
      //           {this.state.books.map((book) => (
      //             <div
      //               key={book.bookId}
      //               className="col-md-4 mb-3 d-flex align-items-stretch"
      //             >
      //               <div className="card h-100" style={{ width: "16rem" }}>
      //                 <img
      //                   src= "https://images-eu.ssl-images-amazon.com/images/I/61ZgWfRAYbL._AC_SX184_.jpg"
      //                   height="180px"
      //                   className="card-img-top"
      //                   alt={book.title}
      //                 />
      //                 <div className="card-body">
      //                   <small className="card-title ">{book.title}</small>
      //                   <p className="card-text float-right">{book.subject}</p>
      //                 </div>
      //               </div>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default UserBooksList;
