import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from './loginNavbar';
import Footer from './footer';

class UserOrAdmin extends Component {
  render() {
    let LibraryWelcome="LibraryWelcome"
    return (
      <React.Fragment>
      <div className="container-fluid">
        <LoginNavbar />
        <div className="row">
          <div className="col-sm-8">
            <img 
              width="1000"
              height="500"
              src={`./images/${LibraryWelcome}.jpg`}
              alt=""
            />
          </div>
          <div className="col-sm-4" style={{marginTop:150}}>
            <div className="well text-center mt-5">
              <strong><h2>Login Panel</h2></strong>
              <br/>
              <Link to={`/admin/login`}>
                {" "}
                <button className="btn btn-primary btn-lg" id="admin">
                  Admin
                </button>{" "}
              </Link>
              <Link to={`/user/login`}>
                <button className="btn btn-danger btn-lg " id="user">
                  User
                </button>
                <br></br>
                <br></br>
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
    </React.Fragment>
    );
  }
}
export default UserOrAdmin;
