import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginNavbar from './loginNavbar';
import CategoryListHome from './categoryListHome';

class Thriller extends Component {
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
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/book/7d502eba8482297a11b1f503173e646b020ce7f1578b89d33e349442e06afb2fe83a5dbfa05a624171b051da0bdf2abbd13a1d21e5fbb9dad991bfe51de31c51.jpg"
                        alt="single-book"
                        width="100%"
                        height="260"
                      />
                    <div className="book-content">
                        The Book Theif
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
 
export default Thriller;