import React, { Component } from "react";
import LoginNavbar from "./loginNavbar";

import UsersService from "../services/usersService";

class LoginFormUser extends Component {
  state = {
    login: {
      email: "",
      password: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("loggedIn");
    UsersService.login(this.state.login).then((res) => {
      this.props.history.push("/home");
    });
  };
  handleChange = (event) => {
    const login = { ...this.state.login };
    login[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ login });
  };
  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <section className="main-login">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 offset-md-3">
                <div className="my-login">
                  <h2 className="text-center">Login</h2>

                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label for="username_or_email">Email</label>{" "}
                      <span className="text-danger">*</span>
                      <input
                        name="username_or_email"
                        type="text"
                        className="form-control "
                        placeholder="Enter UserId"
                        id="membername"
                        value={this.state.login.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>{" "}
                      <span className="text-danger">*</span>
                      <input
                        name="password"
                        type="password"
                        className="form-control "
                        placeholder="Enter password"
                        id="password"
                        value={this.state.login.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-success btn-block">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default LoginFormUser;
