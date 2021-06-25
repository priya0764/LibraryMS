import React, { Component }from "react";
import UsersService from "../services/usersService";
import UserNavbar from "./userNavbar";

class UpdateProfile extends Component{
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
         <React.Fragment>
            <UserNavbar/>
            <form onSubmit={this.handleSubmit} className="w-50 mx-auto" style={{minHeight:757.08, textAlign:"left"}}>
                  <h2>Update Profile</h2>
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
                          First Name
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
                          Last Name
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
                          Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={this.state.userList.mobileNumber}
                        onChange={this.handleChange}
                      /> 
                    </div>
                    <div className="mb-3">  
                      <label htmlFor="dateOfBirth" className="form-label">
                          Date Of Birth
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

                        this.props.history.push("/userPage");

                    }}
                  >
                    Cancel
                  </button>
              </form>
        
        </React.Fragment>
        );
    }
}


export default UpdateProfile;

