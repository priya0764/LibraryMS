import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoutNavbar from './logoutNavbar';
import Footer from './footer'

class UserPage extends Component {
  render() {
    return (
      <div>
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

                        <a href="http://demo.greensoftbd.xyz/greenlms/v2.2/myaccount/index">
                          <i className="bi bi-person-circle"></i> Update Profile
                        </a>

                      </li>
                      <li>
                        <Link to="http://loaclhost/3000/booksorder">
                          <i className="bi bi-bag"></i> My Order
                        </Link>
                      </li>
                      <li>
                        <a href="http://loaclhost/3000/booksorder">
                          <i className="bi bi-book"></i> Suggest books
                        </a>
                      </li>
                      <li>
                        <a href="http://loaclhost/3000/booksorder">
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
                          className="img-thumbnail"
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
                          <b>Email</b>: email
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
      </div>
    );
  }
}
export default UserPage;
