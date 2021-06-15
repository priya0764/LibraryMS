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
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebook/34275d765928f3b2f1132ba10c302fa65a3614b7419e03ca6ed52f380c84173e39be2d94b5628c4a5f86f136fb9e7a32a20b18bf01cc0fa644b7e57e9de6f3b8.jpg"
                        alt="single-book"
                        width="100%"
                        height="260"
                      />
                    <div className="book-content">
                        The Little Prince
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