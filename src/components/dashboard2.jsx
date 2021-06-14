import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";
import "./raghu.css";

class Dashboard2 extends Component {
    render() {
        return(
            <div className="hold-transition skin-blue sidebar-mini"  >
        <div className="wrapper" class="koko" >
          <header className="main-header">
            <NavLink
              to="http://demo.greensoftbd.xyz/greenlms/v2.2/dashboard"
              className="logo"
            >
              <span className="logo-mini">
                <b>GREEN&#8230;</b>
              </span>
              <span className="logo-lg">
                <b>LMS</b>
              </span>
            </NavLink>
            <nav className="navbar navbar-static-top">
              <NavLink
                to=""
                className="sidebar-toggle"
                data-toggle="push-menu"
                role="button"
              >
                <span className="sr-only">Toggle navigation</span>
              </NavLink>
              <div className="navbar-custom-menu" id="info_new_cont">
                <ul className="nav navbar-nav"  >
                    
                  <li className="dropdown tasks-menu">
                    <NavLink
                      to="http://demo.greensoftbd.xyz/greenlms/v2.2/"
                      target="_blank"
                      title="View Frontend"
                      aria-expanded="true"
                    >
                      <i className="fa fa-globe"></i>
                    </NavLink>
                    </li>


                    <li className="dropdown tasks-menu">
                      <NavLink
                        to=""  >
                    
                        <span className="label label-danger" class="hi3" >active</span>
                      </NavLink>
                    </li>



                    <li className="dropdown user user-menu">
                      <NavLink
                        to=""
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <img
                          src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png"
                          className="user-image"
                          alt=""
                        />
                        <span className="hidden-xs">admin</span>
                      </NavLink>
                  </li>



                </ul>
              </div>
            </nav>
          </header>

          <aside className="main-sidebar">
    <section className="sidebar">
        <div className="user-panel">
            <div className="pull-left image">
                <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/profile/index">
                    <img src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png" className="img-circle"  class="kiki" style={{marginRight : "150px"}} alt=""/>
                </NavLink>
            </div>
            <div  class="kiki1">
                <p >Admin</p>
                <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/profile/index"><i className="fa fa-circle text-success" class="kiki1"></i> Online</NavLink>
            </div>
        </div>
        <ul className="sidebar-menu" data-widget="tree">
            <li className="header" class="kiki2" ><b>MAIN NAVIGATION</b></li>
            
                <li className=" active">
                    <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/dashboard">
                        <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                            </NavLink>
                                    </li>
            
                <li className=" ">
                    <NavLink to="/author">
                        <i className="fa lms-educational-book"></i> <span>Author</span>
                                            </NavLink>
                                    </li>
            
                <li className=" ">
                    <NavLink to="/publishers">
                        <i className="fa fa-user-plus"></i> <span>Publisher</span>
                                            </NavLink>
                                    </li>
            
                <li className=" ">
                    <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/ebook">
                        <i className="fa lms-study"></i> <span>Reader</span>
                                            </NavLink>
                                    </li>
            
                <li className="treeview ">
                    <Link to="http://demo.greensoftbd.xyz/greenlms/v2.2/#">
                        <i className="fa lms-book"></i> <span>Books</span>
                                                    <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right"></i>
                            </span>
                                            </Link>
                                            <ul className="treeview-menu">
                                                    <li className=""><Link to="http://demo.greensoftbd.xyz/greenlms/v2.2/book"><i className="fa fa-book"></i>Book</Link></li>
                                                    <li className=""><Link to="http://demo.greensoftbd.xyz/greenlms/v2.2/rack"><i className="fa lms-bookshelf"></i>Rack</Link></li>
                                                    <li className=""><Link to="http://demo.greensoftbd.xyz/greenlms/v2.2/bookcategory"><i className="fa lms-notebook"></i>Book Category</Link></li>
                                                    <li className=""><Link to="http://demo.greensoftbd.xyz/greenlms/v2.2/bookbarcode"><i className="fa fa-barcode"></i>Book Barcode</Link></li>
                                                </ul>
                                    </li>
            
                <li className=" ">
                    <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/requestbook">
                        <i className="fa lms-professor"></i> <span>Suggested Book</span>
                                            </NavLink>
                                    </li>
            
                <li className="treeview ">
                    <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/#">
                        <i className="fa fa-shopping-cart"></i> <span>User Address</span>
                                                    <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right"></i>
                            </span>
                                            </NavLink>
                                            <ul className="treeview-menu" >
                                                    <li className=""><NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/order"><i className="fa fa-first-order"></i>Order</NavLink></li>
                                                    <li className=""><NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/storebook"><i className="fa fa-book"></i>Store Book</NavLink></li>
                                                    <li className=""><NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/storebookcategory"><i className="fa lms-notebook"></i>Store Book Category</NavLink></li>
                                                </ul>
                                    </li>
            
                <li className=" ">
                    <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/emailsend">
                        <i className="fa fa-envelope"></i> <span>Users</span>
                                            </NavLink>
                                    </li>
            
                <li className="treeview ">
                    <NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/#">
                        <i className="fa lms-merchant"></i> <span>Feedback</span>
                                                    <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right"></i>
                            </span>
                                            </NavLink>
                                            <ul className="treeview-menu" >
                                                    <li className=""><NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/income"><i className="fa lms-incomes"></i>Income</NavLink></li>
                                                    <li className=""><NavLink to="http://demo.greensoftbd.xyz/greenlms/v2.2/expense"><i className="fa lms-salary"></i>Expense</NavLink></li>
                                                </ul>
                                    </li>
            

                    </ul>
    </section>
</aside> 
</div>
</div>
        )
    }
}

export default Dashboard2;