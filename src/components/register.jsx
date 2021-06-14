import React, { Component } from "react";
import UsersService from '../services/usersService'


class Register extends Component {
    state={
        user:{
            userId:'',
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            mobileNumber:'',
        }
    };
    handleSubmit=(event)=>{
            event.preventDefault();
            
            UsersService.createUser(this.state.user).then((res)=>{
                this.props.history.push("/userOrAdmin");
    
            });    
    }
    handleChange = (event) => {
        const user = { ...this.state.user };
        user[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ user });
      };
  render() {
    return (
      <div>
        <section class="main-login">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 offset-md-3">
                <div class="my-login">
                  <h2 class="text-center">Register</h2>

                  <form  onSubmit={this.handleSubmit}>
                    
                    
                    <div class="form-group">
                      <label>Email</label> <span class="text-danger">*</span>
                      <input
                        type="text"
                        class="form-control "
                        id="email"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label>Password</label> <span class="text-danger">*</span>
                      <input
                        type="password"
                        class="form-control "
                        minLength="8"
                        maxLength="15"
                        id="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label>FirstName</label> <span class="text-danger">*</span>
                      <input
                        type="text"
                        class="form-control "
                        minLength="2"
                        maxLength="10"
                        id="firstname"
                        name="firstname"
                        value={this.state.user.firstname}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label>LastName</label> <span class="text-danger">*</span>
                      <input
                        type="text"
                        class="form-control "
                        minLength="1"
                        maxLength="10"
                        id="lastname"
                        name="lastname"
                        value={this.state.user.lastname}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label>MobileNumber</label> <span class="text-danger">*</span>
                      <input
                        type="text"
                        class="form-control "
                        minLength="10"
                        maxLength="10"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={this.state.user.mobileNumber}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-success btn-block" onSubmit={this.handleSubmit}>
                        Register
                      </button> 
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Register;