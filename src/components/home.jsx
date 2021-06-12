import React, { Component } from "react";
import StoreBooksCategory from "./storeBooksCategory";
import BooksCategory from "./booksCategory";
import LoginNavbar from './loginNavbar';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <StoreBooksCategory />
        <BooksCategory />
      </React.Fragment>
    );
  }
}

export default Home;
