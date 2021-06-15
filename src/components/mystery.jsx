import React, { Component } from "react";
import CategoryListHome from "./categoryListHome";
import { Link } from "react-router-dom";
import LoginNavbar from "./loginNavbar";

class Mystery extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <div className="container-fluid ml-5" style={{ fontSize: 20 }}>
          <div className="row mt-5">
            <CategoryListHome />
            <div className="col-sm-6" style={{ marginLeft: 50 }}>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-book">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebook/a0edf8c957663856f113d66d60b0a0d75a68744a7ff21322287e2cfc6cd389b67bfd5d1c341bbfbe1194101b3e678a9cba6ba40d7f02c0d3b322eba622d41193.jpg"
                        alt="single-book"
                        width="100%"
                        height="260"
                      />
                    <div className="book-content">
                        A Tale of Two Cities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Mystery;
