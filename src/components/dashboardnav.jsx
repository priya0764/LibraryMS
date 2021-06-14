import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

import "./raghu.css";

class DashboardNav extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hold-transition skin-blue sidebar-mini" style={{paddingLeft:-5}}>
          <div className="wrapper" style={{minWidth:"auto"}}>
            <header className="main-header">
              <NavLink to="/dashboard" className="logo">
                <span className="logo-lg">
                  <b>LIBRARY</b>
                </span>
              </NavLink>
              <div className="navbar navbar-static-top" style={{ height: 62 }}>
                <NavLink
                  to="#"
                  className="sidebar-toggle"
                  data-toggle="push-menu"
                  role="button"
                >
                  <span className="sr-only">Toggle navigation</span>
                </NavLink>
<NavLink to="/adminPage">
                <div className="navbar-custom-menu pull-right" style={{color:"white"}}>
                  <ul className="nav navbar-nav">
                    <li className="dropdown user user-menu">
                      <img
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png"
                        className="user-image"
                        alt="user Image"
                      />
                      <span className="hidden-xs">Admin</span>
                    </li>
                  </ul>
                </div>
                </NavLink>
              </div>
              
            </header>
          </div>
        {/* </div>
          <div
            className="hold-transition skin-blue sidebar-mini"
            style={{ height: 650}}
          > */}
            <aside className="main-sidebar" style={{height: 1500,width: 245 }}>
              <section className="sidebar">
                <div className="user-panel">
                  <div className="pull-left image">
                    <img
                      src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png"
                      className="img-rounded"
                      style={{ height: 45, width: 50 }}
                      alt="User"
                    />
                  </div>
                  <div className="pull-left info">
                    <p>Admin</p>
                    <Link to="#">
                      <i className="fa fa-circle text-success"></i> Online
                    </Link>
                  </div>
                </div>
                <ul
                  className="sidebar-menu tree mt-3"
                  data-widget="tree"
                  style={{ textAlign: "left" }}
                >
                  <h6 style={{ textAlign: "center", color: "turquoise" }}>
                    MAIN NAVIGATION
                  </h6>
                  <li className=" active">
                    <Link to="/dashboard">
                      <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                    </Link>
                  </li>

                  <li className=" ">
                    <Link to="/bookIssued">
                      <i className="fa fa-book"></i> <span>Book Issue</span>
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/author">
                      <i className="fa fa-user"></i> <span>Author</span>
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/publisher">
                      <i className="fa fa-user"></i> <span>Publisher</span>
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/reader">
                      <i className="fa fa-book"></i> <span>Reader</span>
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/suggestedbooks">
                      <i className="fa fa-book"></i>{" "}
                      <span>Suggested Books</span>
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/booksReturned">
                      <i className="fa fa-book"></i>{" "}
                      <span>Books Returned</span>
                    </Link>
                  </li>

                  <li className=" ">
                    <Link to="/User">
                      <i className="fa fa-user-plus"></i> <span>User</span>
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/book">
                      <i className="fa fa-book"></i> <span>Books</span>
                    </Link>
                  </li>
                  <li className=" ">
                      <Link to="/damagedbook">
                        <i className="fa fa-book"></i> <span>Damaged Books</span> 
                      </Link>
                    </li>
                  <li className=" ">
                    <Link to="/address">
                      <i className="fa fa-shopping-cart"></i>{" "}
                      <span>User Address</span>
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/feedback">
                      <i className="fa fa-comments"></i> <span>Feedback</span>
                    </Link>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
      </React.Fragment>
    );
  }
}

export default DashboardNav;
