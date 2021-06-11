import React, { Component } from "react";
import StoreBooksCategory from "./storeBooksCategory";
import LoginNavbar from './loginNavbar';
import Footer from './footer'

class Home extends Component {
  render() {
    return (
      <div>
        <LoginNavbar />
        <StoreBooksCategory />
        <Footer/>
      </div>
    );
  }
}

export default Home;
