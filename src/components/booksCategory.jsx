import React, { Component } from "react";
import { Link } from 'react-router-dom';

class BooksCategory extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main-book-category-list">
          <div className="container ml-5 mr-5">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="theme_heading_green mb-0" 
                  style={{ textAlign: "left" }}>Books Category</h2>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <img
                      className="book-category-thumbnail-image"
                      src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/default/bookcategory.jpg"
                      alt="Science"
                    />
                  </div>
                  <div className="book-category-content">
                    <Link className="book-category-title">Science</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <img
                      className="book-category-thumbnail-image"
                      src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/bookcategory/0616a7f715db31b312bc5e2fcc43a15a851997407d2c508cc6a4e10c7cb67b534d1edcaae7066efe215e30b2a201cc6fef600d15c2a3d48a790b07dd6671d5fb.jpg"
                      alt="General Knowledge"
                    />
                  </div>
                  <div className="book-category-content">
                    <Link className="book-category-title">General Knowledge</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <img
                      className="book-category-thumbnail-image"
                      src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/bookcategory/cf38b3aaccd498f1c02dd561e55984af707da42092d4cd30e7cb2a93d4aa1a387cb2246743c9a0c9bc925a7686f134ea5d26ee7b928856758a602cdbe52f2f57.jpg"
                      alt="Business Book"
                    />
                  </div>
                  <div className="book-category-content">
                    <Link className="book-category-title">Business Book</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <img
                      className="book-category-thumbnail-image"
                      src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/bookcategory/1e975263e43655ff9d49dc1a4ccc46181bd95a8018f8495f0f3d55bd24f1fa4c179b848e13a240ae287bd82885515ae1a66731072e092e31531a34c946f8a04e.png"
                      alt="Kids"
                    />
                  </div>
                  <div className="book-category-content">
                    <Link className="book-category-title">Kids</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <img
                      className="book-category-thumbnail-image"
                      src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/bookcategory/63712570345eb67a8c68c51743d3c9696e322c365530edbf6604d548525e9aa7456352eff2f17a4afa4c38b709f75c44df56179f2e5ba432874defcea0bee6dc.png"
                      alt="Music And Movie"
                    />
                  </div>
                  <div className="book-category-content">
                    <Link className="book-category-title">Music And Movie</Link>
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

export default BooksCategory;
