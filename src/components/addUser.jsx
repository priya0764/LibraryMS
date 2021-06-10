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
            subscriptionDate:"",
            subExpireDate:"",
            subscriptionStatus:"",
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
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">
                            UserId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userId"
                          name="userId"
                          value={this.state.user.userId}
                          onChange={this.handleChange}
                          autoFocus
                          />
                        
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
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          name="password"
                          value={this.state.user.password}
                          onChange={this.handleChange}
                          
                          />
                        <label htmlFor="firstname" className="form-label">
                            FirstName
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                          value={this.state.user.firstname}
                          onChange={this.handleChange}
                           />
                         <label htmlFor="lastname" className="form-label">
                            LastName
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                          value={this.state.user.lastname}
                          onChange={this.handleChange}
                          
                        />
                         <label htmlFor="mobileNumber" className="form-label">
                            MobileNumber
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={this.state.user.mobileNumber}
                          onChange={this.handleChange}
                          
                        />
                       <label htmlFor="dateOfBirth" className="form-label">
                            DateOfBirth
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={this.state.user.dateOfBirth}
                          onChange={this.handleChange}
                        />
                       <label htmlFor="subscriptionDate" className="form-label">
                            Subscription Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subscriptionDate"
                          name="subscriptionDate"
                          value={this.state.user.subscriptionDate}
                          onChange={this.handleChange}
                        /> 
                        <label htmlFor="subExpireDate" className="form-label">
                            SubExpire Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subExpireDate"
                          name="subExpireDate"
                          value={this.state.user.subExpireDate}
                          onChange={this.handleChange}
                        />  
                       <label htmlFor="subscriptionStatus" className="form-label">
                            Subscription Status
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subscriptionStatus"
                          name="subscriptionStatus"
                          value={this.state.user.subscriptionStatus}
                          onChange={this.handleChange}
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