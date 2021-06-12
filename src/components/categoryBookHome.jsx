import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CategoryBookHome extends Component {
  state = {
    books:[],
    book:{},
    //subject:this.props.match.params.subject,
  };
  
 //filterValue = (book, subject, Mystery)=> book.find(sub1 => sub1[subject] === Mystery);

  render() {
    return (
      <div className="">
        {this.state.books.map((book) => (
        <div className="col-lg-12 ml-5">
          <div className="row">
            <div className="col-sm-4">
              <div className="single-book">
                <div className="book-image ">
                  <Link to="">
                    <img
                      className="book-thumbail-image h-100"
                      src={`./image/${book.imageName}`}
                      alt="single-book"
                      style={{width:650}}
                    />
                  </Link>
                </div>
                <div className="book-content" style={{alignContent:"center"}}>
                  <Link
                    to=""
                    className="book-title" style={{textAlign:"center"}}
                  >
                    {book.title}{" "}
                  </Link>
                  <div className="book-actions">
                    <Link
                      className="btn btn-outline-success btn-sm"
                      to=""
                    >
                      <i className="fa fa-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    );
  }
}

export default CategoryBookHome;
