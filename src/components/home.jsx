import React, { Component } from "react";
import StoreBooksCategory from "./storeBooksCategory";
import BooksCategory from "./booksCategory";
import LoginNavbar from './loginNavbar';
import Footer from './footer'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <StoreBooksCategory />
        <BooksCategory />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Home;
