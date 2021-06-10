import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LoginFormAdmin extends Component {
    state={
        login:{
            email:'',
            password:'',
        }
    }
    handleChange = (event) => {
        const login = {...this.state.login };
        // dynamically handling event changes
        login[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ login });
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
                    <label for="username_or_email">Email</label>{" "}
                    <span className="text-danger">*</span>
                    <input
                      name="username_or_email"
                      type="text"
                      className="form-control "
                      placeholder="Enter Email"
                      id="membername"
                      value=""
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
                      value=""
                      onChange={this.handleChange}
                    />
                  </div>
                  <Link to={`/adminPage`}>
                  <button type="submit" className="btn btn-success btn-block" >
                    Login
                  </button></Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default LoginFormAdmin;
