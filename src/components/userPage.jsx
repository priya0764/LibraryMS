import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoutNavbar from './logoutNavbar';
import UserNavbar from './userNavbar'
import Footer from './footer'

class UserPage extends Component {
  render() {
    return (
      <div>
        <UserNavbar/>
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
                        <Link to="/updateProfile/3">
                          <i className="bi bi-person-circle"></i> Update Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/usersuggestedbook">
                          <i className="bi bi-book"></i> Suggest books
                        </Link>
                      </li>
                      <li>
                        <a href="/feedback/add">
                          <i className="bi bi-pencil-fill"></i> Feedback
                        </a>
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
                        <h3>User</h3>
                        <p className="text-muted text-center">User</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="profile_view_item">
                        <p>
                          <b>Email</b>: user@gmail.com
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
                          <b>Role</b>: User
                        </p>
                      </div>
                      <div className="profile_view_item">
                        <p>
                          <b>Username</b>: user
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
      </div>
    );
  }
}
export default UserPage;
