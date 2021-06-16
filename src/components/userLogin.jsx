import React,{ Component } from 'react'
import UsersService from '../services/usersService'
import { Link } from "react-router-dom";

import LoginNavbar from './loginNavbar';
  
class UserLogin extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
    
        }
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    saveUser= (e) =>{
        e.preventDefault();
        let loginentity ={email:this.state.email,password:this.state.password};
        console.log('loginentity => '+JSON.stringify(loginentity));

        UsersService.login(loginentity).then(res => {
           this.props.history.push("/userPage");
        });
    }
    changeEmailHandler =(event) =>{
        this.setState({email:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }
    
render(){
    return(
        <React.Fragment>
        <LoginNavbar />      
        <div>
            <LoginNavbar />
            <br></br>
        <div>
        
             <div className = "container-md" style={{minHeight:757.08, textAlign:"left"}}>
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Login Page</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>Email</label><span class="text-danger">*</span>
                                      <input placeholder="email" 
                                      name="userid" 
                                      className="form-control" 
                                      value={this.state.email} onChange={this.changeEmailHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Password</label><span class="text-danger">*</span>
                                      <input placeholder="Password"
                                      minLength="8"
                                      maxLength="15"
                                      type ="Password"
                                      name="password" 
                                      className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveUser}>Login</button>
                                  <div className="mt-2 text-center">
                                 <small>
                                     New user? <Link to="/register">SignUp</Link>
                                </small>
                                  </div>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</React.Fragment>   
    )
}
}
export default UserLogin