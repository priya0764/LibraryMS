import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
    state = {};
    render() {
      return (
        <React.Fragment>
            <Link to="/userLogin">Logout</Link>
        </React.Fragment>
      );
    }
  }
  
  export default Logout;