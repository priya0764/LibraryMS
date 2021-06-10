import React, { Component } from "react";

class LoginFormUser extends Component {
    state={
        login:{

        }
    }

      
  render() {
    return (
    
      <section className="main-login" >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-md-3">
              <div className="my-login">
                <h2 className="text-center">Login</h2>

                <form
                   onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <label for="username_or_email">UserId</label>{" "}
                    <span className="text-danger">*</span>
                    <input
                      name="username_or_email"
                      type="text"
                      className="form-control "
                      placeholder="Enter UserId"
                      id="membername"
                      value=""
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
                      value=""
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
    );
  }
}
export default LoginFormUser;
