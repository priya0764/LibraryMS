import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoryListHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
            <div className="col-sm-2 ml-5">
              <div className="main-slider-menu">
                <span className="sidebar-title">
                  <i className="fa fa-list"></i> All Categories
                </span>
                <div className="slider-menu">
                  <ul>
                    <li>
                      <Link to="/category/books/mystery">Mystery</Link>
                    </li>
                    <li>
                      <Link to="/category/books/thriller">Thriller</Link>
                    </li>
                    <li>
                      <Link to="/category/books/horror">Horror</Link>
                    </li>
                    <li>
                      <Link to="/category/books/sciencefiction">Science Fiction</Link>
                    </li>
                    <li>
                      <Link to="/category/books/adventure">Adventure</Link>
                    </li>
                    <li>
                      <Link to="/category/books/fantasy">Fantasy</Link>
                    </li>
                    <li>
                      <Link to="/home"> + More Category</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      </React.Fragment>
    );
  }
}

export default CategoryListHome;
