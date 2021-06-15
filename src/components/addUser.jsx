import React, { Component } from "react";
import usersService from "../services/usersService";


class AddUser extends Component{
    state={
        user:{
            userId:"",
            email:"",
            password:"",
            firstname:"",
            lastname:"",
            dateOfBirth:"",
            
        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        usersService.createUser(this.state.user).then((res)=>{
            this.props.history.push("/users");

        });
    };
    handleChange=(event)=>{
        const user={...this.state.user};
        user[event.currentTarget.name]=event.currentTarget.value;
        this.setState({user});
    };
    render(){
        return(
            <div className="w-50 mx-auto" style={{minHeight:757.08, textAlign:"left"}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={this.state.user.email}
                          onChange={this.handleChange}
                          required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          minLength="8"
                          maxLength="15"
                          id="password"
                          name="password"
                          value={this.state.user.password}
                          onChange={this.handleChange}
                          required
                          />
                        <label htmlFor="firstname" className="form-label">
                            FirstName
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          minLength="2"
                          maxLength="10"
                          id="firstname"
                          name="firstname"
                          value={this.state.user.firstname}
                          onChange={this.handleChange}
                          required
                           />
                         <label htmlFor="lastname" className="form-label">
                            LastName
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          minLenth="1"
                          maxLength="10"
                          id="lastname"
                          name="lastname"
                          value={this.state.user.lastname}
                          onChange={this.handleChange}
                          required
                        />
                         <label htmlFor="mobileNumber" className="form-label">
                            MobileNumber
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          minLength="10"
                          maxLength="10"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={this.state.user.mobileNumber}
                          onChange={this.handleChange}
                          required
                        />
                        <label htmlFor="dateOfBirth" className="form-label">
                            DateOfBirth
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          minLength="yyyy-mm-dd"
                          maxLength="yyyy-mm-dd"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={this.state.user.dateOfBirth}
                          onChange={this.handleChange}
                          required
                        />
                       </div>   
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                        Submit
                    </button>     
                </form>
            </div>
        );
    }
}

export default AddUser;