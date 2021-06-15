import React, { Component }from "react";
import UsersService from "../services/usersService";

class UserDetails extends Component{
    state = {
        userList: {
            userId:"",
            email:"",
            password:"",
            firstname:"",
            lastname:"",
            dateOfBirth:"",
           
        },
     };
    componentDidMount(){
        UsersService.getUserById(this.props.match.params.id).then((res)=>
         this.setState({userList:res.data})
        ); 
    } 

    handleChange=(event)=>{
        event.preventDefault();
        const userList=this.state.userList;
        userList[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ userList });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.userList);
        UsersService.updateUser(
            this.props.match.params.id,
            this.state.userList
            
        ).then((res)=>{
            this.props.history.push("/users");
        });
    };
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                  <h1>{this.props.match.params.id}</h1>
                  <div className="mb-3">
                      <label htmlFor="userId" className="form-label">
                          UserId
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="userId"
                        name="userId"
                        value={this.state.userList.userId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                          Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={this.state.userList.email}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                          Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="password"
                        name="password"
                        value={this.state.userList.password}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="firstname" className="form-label">
                          firstName
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        value={this.state.userList.firstname}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="lastname" className="form-label">
                          LastName
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                        value={this.state.userList.lastname}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="mobileNumber" className="form-label">
                          MobileNumber
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={this.state.userList.mobileNumber}
                        onChange={this.handleChange}
                      /> 
                      <label htmlFor="dateOfBirth" className="form-label">
                          dateOfBirth
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={this.state.userList.dateOfBirth}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <button 
                  type="submit" className="btn btn-primary float-right">
                   save
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/users");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        );
    }
}

export default UserDetails;

