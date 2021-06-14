import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginNavbar from './loginNavbar';
import CategoryListHome from './categoryListHome';

class Adventure extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <LoginNavbar />
        <div className="container-fluid ml-5" style={{ fontSize: 20 }}>
          <div className="row mt-5">
            <CategoryListHome />
            <div className="col-sm-6" style={{ marginLeft: 50 }}>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-book">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/book/90ef81e1fb25e849d404bae17fb1569c33842fe7a20e3653b2c1e25f9612ce0284513c7036bc40f4660eb770013d274e847d9b754744c8b04bdbb53b2edcd613.jpg"
                        alt="single-book"
                        width="100%"
                        height="260"
                      />
                    <div className="book-content">
                    Twilight
                      <div className="book-actions">
                        <Link className="btn btn-outline-success btn-sm" to="#">
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </React.Fragment>
         );
    }
}
 
export default Adventure;