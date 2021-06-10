import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from './loginNavbar';

class UserOrAdmin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <LoginNavbar />
        <div className="row">
          <div className="col-sm-4 offset-md-4">
            <div className="well text-center">
              <strong>Login Panel</strong>
              <br />
              <Link to={`/admin/login`}>
                {" "}
                <button className="btn btn-primary " id="admin">
                  Admin
                </button>{" "}
              </Link>
              <Link to={`/user/login`}>
                <button className="btn btn-danger " id="user">
                  User
                </button>
                <br></br>
                <br></br>
              </Link>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
export default UserOrAdmin;
