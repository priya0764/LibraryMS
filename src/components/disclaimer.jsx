import React, { Component } from "react";
import LoginNavbar from './loginNavbar';
import login from './pictures/login.jpg'

class Disclaimer extends Component {
  render() {
    return (
        <div >
            <LoginNavbar/>
        <div className="spinner-border text-success mt-4 mb-1" role="status">
        
        </div>
        <div className="text-centre ">
          <h3>Login to know more... </h3>
        </div>
        <img className="mx-auto" width='500' height='200' src={login}/>
       
      </div>
    );
  }
}
export default Disclaimer
