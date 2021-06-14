import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

class Dashboard3 extends Component {
    render(){
        return (
            <div class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

<header class="main-header">
<a href="http://demo.greensoftbd.xyz/greenlms/v2.2/dashboard" class="logo">
        
        <span class="logo-mini"><b>GREEN&#8230;</b></span>
        <span class="logo-lg"><b> LMS</b></span>
    </a>
    <nav class="navbar navbar-static-top">

    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
        <div class="navbar-custom-menu">

        <ul class="nav navbar-nav">
        <li class="dropdown tasks-menu">
                		<a href="http://demo.greensoftbd.xyz/greenlms/v2.2/" target="_blank" title="View Frontend" aria-expanded="true">
    		              <i class="fa fa-globe"></i>
    		            </a>
                    </li>

                    <li class="dropdown user user-menu">

                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png" class="user-image" alt="user Image"></img>
                      <span class="hidden-xs">Admin</span>
                    </a>
                    <ul class="dropdown-menu">

                    <li class="user-header">
                            <img src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/member/default.png" class="img-circle" alt="user Image"></img>
                            <p>Admin - Admin<small> Member Since - 28 July 2020</small></p>
                        </li>

                        <li class="user-footer">
                            <div class="pull-left">
                                <a href="http://demo.greensoftbd.xyz/greenlms/v2.2/profile/index" class="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div class="pull-right">
                                <a href="http://demo.greensoftbd.xyz/greenlms/v2.2/login/logout" class="btn btn-default btn-flat">Sign out</a>
                            </div>
                        </li>

                        
                    </ul>

                    </li>
        </ul>

        </div>
    </nav>

</header>


</div>
            </div>
        )
    }
}
export default Dashboard3;