import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoutNavbar from './logoutNavbar';
import Footer from './footer'


class AdminPage extends Component {
  render() {
    return (
      <React.Fragment>
        <LogoutNavbar/>
        <section className="main-slider">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="main-slider-menu">
                  <span className="sidebar-title">
                    <i className="bi bi-list"></i> My Account
                  </span>
                  <div className="slider-menu">
                    <ul>
                      <li>
                        <Link to="/adminPage">
                          <i className="bi bi-person-circle"></i> My Profile
                        </Link>
                      </li>
                      <li>

                        <Link to="/booksorder">
                          <i className="bi bi-bag"></i> My Order
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="user-profile">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="user-profile-image">
                        <img
                          className="img-thumbnail mx-auto"
                          src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png"
                          alt="Admin profile picture"
                        />
                        <h3>Admin</h3>
                        <p className="text-muted text-center">Admin</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="profile_view_item">
                        <p>
                          <b>Email</b>: admin@gmail.com
                        </p>
                      </div>
                      <div className="profile_view_item">
                        <p>
                          <b>Gender</b>: Male
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="profile_view_item">
                        <p>
                          <b>Role</b>: Admin
                        </p>
                      </div>
                      <div className="profile_view_item">
                        <p>
                          <b>Username</b>: admin
                        </p>
                      </div>
                    </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          
        </section>
        <Footer/>
        </React.Fragment>
    );
  }
}
export default AdminPage;
