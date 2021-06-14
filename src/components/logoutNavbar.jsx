import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LogoutNavbar extends Component {
  state = {
    search: "",
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };
  
  render() {
    return (
      <React.Fragment>
        <section className="header-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12" style={{textAlign:"left", fontSize:20}}>
                <div className="header-email ml-5">
                  <i className="fa fa-envelope"></i> admin@gmail.com{" "}
                </div>
                <div className="header-phone ml-5">
                  <i className="fa fa-phone"></i> 123456{" "}
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" style={{textAlign:"right", fontSize:20}}>
                <ul className="header-items">
                  <li>
                    <NavLink to="/dashboard" className="mr-2">
                      <i className="fa fa-dashboard"></i> DashBoard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/adminPage" className="mr-2 ml-2">
                    <i class="fa fa-lock"></i> My Account
                    </NavLink>                    
                  </li>
                  <li>
                    <NavLink to="" className="mr-5 ml-2">
                    <i class="fa fa-sign-out"></i> Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="header ml-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <NavLink to="/">
                  <img
                    className="header-logo"
                    src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/images/f35ff8f9eb9768fcef25be8c7fe37ddd789a17cf16f6cfe9dc9c1fee656b4c30b18d8462b7f198e04e438b84d46b29bacdd2d4ebe37d70f04d66c88565a9e061.jpg"
                    alt=""
                  />
                </NavLink>
              </div>
              <div className="col-sm-6">
                <div className="header-search">
                  <form>
                    <div className="input-group input-group-search-form">
                      <input
                        type="text"
                        placeholder="Search...."
                        className="form-control form-control-lg input-group-search"
                        name="search"
                        onChange={this.onChange}
                      />
                      <div className="input-group-append search-btn">
                        <input
                          type="submit"
                          className="input-group-text"
                          value="Search"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="carts float-right">
                  <button
                    className="btn btn-success btn btn-lg cart-item-badge mr-5"
                    type="button"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-shopping-bag"></i> <b>0.00</b>
                    <span className="badge badge-danger cart-item-badge-count">
                      0
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="mini-cart">
                      <h6 className="p-3">
                        Currently you cart item are empty.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mainmenu">
          <div className="container-fluid" style={{textAlign:"left", fontSize:20}}>
            <ul>
              <li>
                <NavLink
                  className="container-fluid ml-5"
                  to=""
                >
                  <i className="fa fa-home"></i>Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="container"
                  to=""
                >
                  Ebook
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="container"
                  to="/book/details"
                >
                  Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="container"
                  to=""
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default LogoutNavbar;