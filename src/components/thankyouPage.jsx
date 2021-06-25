import React, { Component } from "react";
import { Link } from "react-router-dom";
import thankyou from "./pictures/thankYou.png";

class ThankyouPage extends Component {
  render() {
    return (
      <div class="text-center mt-5">
        <img src={thankyou} alt="" style={{ marginLeft: "720px" }}></img>

        <h1 class="display-3">Thank You!</h1>
        <p class="lead">
          We appreciate you for spending your valuable time with us
          <strong> We will contact you as soon as possible</strong>
        </p>
        <hr></hr>
        <p>
          Having trouble? <a href="/contact-Page">Contact us</a>
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-sm" href="/" role="button">
            Continue to homepage
          </a>
        </p>
      </div>
    );
  }
}

export default ThankyouPage;
