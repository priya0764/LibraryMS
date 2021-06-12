import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryBookHome from "./categoryBookHome";
import LoginNavbar from "./loginNavbar";

class CategoryListHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      <LoginNavbar />
        <div className="container-fluid ml-5" style={{textAlign:"left", fontSize:20}}>
          <div className="row mt-5">
            <div className="col-xs-6">
              <div className="main-slider-menu">
                <span className="sidebar-title">
                  <i className="fa fa-list"></i> All Categories
                </span>
                <div className="slider-menu">
                  <ul>
                    <li>
                      <Link to="category/books">Mystery</Link>
                    </li>
                    <li>
                      <Link to="">Thriller</Link>
                    </li>
                    <li>
                      <Link to="">Horror</Link>
                    </li>
                    <li>
                      <Link to="">Science Fiction</Link>
                    </li>
                    <li>
                      <Link to="">Adventure</Link>
                    </li>
                    <li>
                      <Link to="">Fantasy</Link>
                    </li>
                    <li>
                      <Link to="/home"> + More Category</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <CategoryBookHome />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CategoryListHome;
