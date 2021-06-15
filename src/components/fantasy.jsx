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
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/book/a0574bae8b055a9a70dd4160ec2828093c9aaa617004405ccf501a63c37899661bda0b55e9ef10d3a2bbb8eac9b2793d7df046f00e5c9d5fe26f85de0d6c384a.jpg"
                        alt="single-book"
                        width="100%"
                        height="260"
                      />
                    <div className="book-content">
                        Pride and Prejudice
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