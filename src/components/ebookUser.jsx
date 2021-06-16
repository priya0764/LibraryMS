import React, { Component } from "react";
import death from "./pictures/death.jpg";
import UserNavbar from "./userNavbar";
import power from './pictures/power.jpg'
import alchemist from './pictures/alchemist.jpg'
import bookThief from './pictures/bookThief.jpg'
import lion from './pictures/lion.jpg'
import charlotte from './pictures/charlotte.jpg'
import Footer from './footer'

class EbookUser extends Component {
  render() {
    return (
      <React.Fragment>
     
        <div className="container-fluid">
          <UserNavbar />
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card h-100" style={{ width: "16rem" }}>
                    <img
                      src={death}
                      height="180px"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-title">
                        <b>Name:</b>Death;An inside Story: A book for all those
                        who shall die
                      </p>
                      <p className="card-text float-centre">
                        <b>Author:</b>Sadhguru
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card h-100" style={{ width: "16rem" }}>
                    <img
                      src={power}
                      height="180px"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-title">
                        <b>Name:</b>The Power of your subconscious Mind
                      </p>
                      <p className="card-text float-center">
                        <b>Author:</b>Dr Joseph Murthy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card h-100" style={{ width: "16rem" }}>
                    <img
                      src={alchemist}
                      height="180px"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-title">
                        <b>Name:</b>The Alchemist
                      </p>
                      <p className="card-text float-center">
                        <b>Author:</b>Paulo Coelho
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card h-100" style={{ width: "16rem" }}>
                    <img
                      src={bookThief}
                      height="180px"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-title">
                        <b>Name:</b>The Book Thief
                      </p>
                      <p className="card-text float-center">
                        <b>Author:</b>Markus Zusak
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card h-100" style={{ width: "16rem" }}>
                    <img
                      src={lion}
                      height="180px"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-title">
                        <b>Name:</b>The Lion, the Witch,and the Wardrobe
                      </p>
                      <p className="card-text float-center">
                        <b>Author:</b>C.S.Lewis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card h-100" style={{ width: "16rem" }}>
                    <img
                      src={charlotte}
                      height="180px"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-title">
                        <b>Name:</b>Charlotte's Web
                      </p>
                      <p className="card-text float-center">
                        <b>Author:</b>E.B White
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      <Footer/>
      </React.Fragment>
    );
  }
}
export default EbookUser;
