import React, { Component } from "react";
import StoreBooksCategory from "./storeBooksCategory";
import LoginNavbar from './loginNavbar';

class Home extends Component {
  render() {
    return (
      <div>
        <LoginNavbar />
        <StoreBooksCategory />
      </div>
    );
  }
}

export default Home;
