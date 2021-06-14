import React, { Component } from "react";
import image from './pictures/image.png';

import "./raghu.css";
import DashboardNav from "./dashboardnav";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <DashboardNav/>
        <section className="content"  style={{marginLeft:220,  marginTop:10}}>
          <h2 style={{textAlign:"left"}}>Dashboard</h2>
          <div className="box box-mytheme">
            <img src={image} alt="" style={{marginLeft:250}}></img>
            <div class="kiki5">
              <p>
                <h2>
                  The only thing you absolutely have to know is the location of
                  the library
                </h2>
              </p>
            </div>
            <p>
              <b>-Albert Einstein</b>
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Dashboard;
