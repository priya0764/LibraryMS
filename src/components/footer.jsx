import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="main-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="newsletter-content">
                  <h3>Sign Up For Newsletters</h3>
                  <p>Be the First to Know. Sign up for newsletter today</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="newsletter-box">
                  <form>
                    <div className="input-group input-group-search-form">
                      <input
                        type="text"
                        name="email"
                        placeholder="Subscribe Now...."
                        className="form-control form-control-lg input-group-search"
                      />
                      <div className="input-group-append search-btn">
                        <input
                          type="submit"
                          className="input-group-text"
                          value="Subscribe"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 footer-bootom-menu">
                <ul>
                  <li>
                    <Link
                      className=""
                      to=""
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=""
                      to=""
                    >
                      Ebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=""
                      to=""
                    >
                      Book
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=""
                      to=""
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
