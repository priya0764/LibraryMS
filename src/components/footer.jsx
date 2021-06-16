import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="main-newsletter">
          <div className="container" style={{ marginLeft: 400 }}>
            <div className="row ml-5">
              <div className="col-xl-6 col-lg-6">
                <div className="newsletter-content">
                  <h3>Sign Up For Newsletters</h3>
                  <p>Be the First to Know. Sign up for newsletter today</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <div className="container">
            <div className="row" style={{ marginLeft: 300 }}>
              <div className="col-sm-6 footer-bootom-menu">
                <div class="footer-copyright text-center py-3">
                  © 2020 Copyright:
                  <Link to="#" style={{color:"white"}}> LibraryMS.com</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;