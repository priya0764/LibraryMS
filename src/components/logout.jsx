import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
    state = {};
    render() {
      return (
        <div>
            <Link to="/userLogin">Logout</Link>
        </div>
      );
    }
  }
  
  export default Logout;