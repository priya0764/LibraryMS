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
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebook/b428067ca29e5aac19f07d870529819cc47125107156165173d191ccaafae3d0f21deef1075f77442cbc4afeb88718be133a6e3181d0a39d5a27b9ab99719af8.jpg"
                        alt="single-book"
                        width="100%"
                        height="260"
                      />
                    <div className="book-content">
                        The Lion, the Witch and the Wardrobe
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
 
export default Thriller;